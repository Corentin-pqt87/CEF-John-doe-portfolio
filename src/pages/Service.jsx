// Images (icônes SVG)
import { ReactComponent as Brush } from '../asset/svg/brush.svg';
import { ReactComponent as Search } from '../asset/svg/search.svg';
import { ReactComponent as Codeslash } from '../asset/svg/code-slash.svg';

// Style
import '../style/style.css';

export default function Service() {
  return (
    <div className='Service'>
      <div id='header'></div>

      <div className='items-align-center justify-content-center text-center my-5 mx-auto'>
        <div>
          <h1>Mon offre de services</h1>
          <p><small>Voici les prestations sur lesquelles je peux intervenir</small></p>
          <hr className="border border-primary border-2 opacity-100 mx-auto" style={{ width: "35%" }} />
        </div>

        <div className="container">

            <div className="row g-4 justify-content-center">

                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 text-center p-4 shadow-sm justify-content-center">
                        <div className="d-flex justify-content-center mb-3">
                            <Brush className="icon" />
                        </div>
                        
                        <h2>UX Design</h2>
                        <p>
                        L'UX Design est une discipline qui consiste à concevoir des
                        produits (sites web, applications mobiles, logiciels, objets
                        connectés, etc.) en plaçant l'utilisateur au centre des
                        préoccupations. L'objectif est de rendre l'expérience
                        utilisateur la plus fluide et agréable possible.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 text-center p-4 shadow-sm justify-content-center">
                        <div className="d-flex justify-content-center mb-3">
                            <Search className="icon" />
                        </div>
                        
                        
                        <h2>Développement Web</h2>
                        <p>
                        Le développement de sites web consiste à créer des sites
                        internet en utilisant des langages de programmation (HTML,
                        CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                        React, Angular, etc.).
                        </p>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 text-center p-4 shadow-sm justify-content-center">
                        <div className="d-flex justify-content-center mb-3">
                            <Codeslash className="icon" />
                        </div>
                        
                        
                        <h2>Référencement</h2>
                        <p>
                        Le référencement naturel (SEO) est une technique qui consiste à
                        optimiser un site web pour le faire remonter dans les résultats
                        des moteurs de recherche (Google, Bing, Yahoo, etc.).
                        L'objectif est d'attirer un maximum de visiteurs qualifiés sur
                        le site.
                        </p>
                    </div>
            </div>
        </div>
</div>


      </div>
    </div>
  );
}
