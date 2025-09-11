// Images

import envelope from '../asset/svg/envelope-at.svg'
import geoalt from '../asset/svg/geo-alt.svg'
import map from '../asset/svg/map.svg'
import phone from '../asset/svg/phone.svg'



export default function Contact() {
  return (
    <div className="Contact">
        <div>
            <h1>Contact</h1>
            <p><small>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</small></p>
            <hr class="border border-primary border-2 opacity-100 mx-auto" style={{ width: "35%" }} />
        </div>

        <div className="Contenue-box container text-start">
            <div className='row my-5'>
                <div className='col-md-6'>
                    <h2>Formulaire de contact</h2>
                    <hr class="border border-primary border-2 opacity-100" />

                    
                </div>

                <div className='col-md-6'>
                    <h2>Mes coordonnées</h2>
                    <hr class="border border-primary border-2 opacity-100" />

                    <div>
                        <h3>John Doe</h3>
                        <address className="d-flex flex-column">
                            <ul>
                                <li className="p-2">
                                    <img src={map}alt='localisation' width="16" height="16"></img>
                                    40 rue Laure Diebold
                                    </li>
                                <li className="p-2">
                                    <img src={geoalt}alt='localisation' width="16" height="16"></img>
                                    69009 Lyon, France
                                </li>
                                <li className="p-2">
                                    <img src={phone} alt="Adresse" width="16" height="16"></img>
                                    10 20 30 40 50
                                </li>
                                <li className="p-2">
                                    <img src={envelope} alt="Adresse" width="16" height="16"></img>
                                    john.doe@gmail.com
                                </li>
                            </ul>
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508184!2d4.796403976553837!3d45.778665712401754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1757520935329!5m2!1sfr!2sfr" width="600" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
                
            </div>
        </div>
    
    </div>
  );
}
