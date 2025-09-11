// Style
import '../style/style.css';
import '../style/Realisation.css';

// Images
import coder from '../asset/img/portfolio/coder.jpg';
import EspaceBienEtre from '../asset/img/portfolio/espace-bien-etre.jpg';
import FreshFood from '../asset/img/portfolio/fresh-food.jpg';
import restaurantAkira from '../asset/img/portfolio/restaurant-japonais.jpg';
import seo from '../asset/img/portfolio/seo.jpg';
import screens from '../asset/img/portfolio/screens.jpg';

export default function Realisation() {
  return (
    <div className="Realisation">
        <div id="header"></div>

        <div className='items-align-center justify-content-center text-center my-5 mx-auto'>
            <div>
                <h1>Portfolio</h1>
                <p><small>Voici quelques-unes de mes réalisations.</small></p>
                <hr class="border border-primary border-2 opacity-100 mx-auto" style={{ width: "35%" }} />
            </div>

            <div className="row g-4 justify-content-center">

                {/* Fresh Food */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 text-center">
                        <img src={FreshFood} alt="Fresh Food" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Fresh Food</h5>
                            <p className="card-text"><small>Site de vente de produits frais en ligne</small></p>
                            <button className="btn btn-primary" disabled>Voir le site</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                        </div>
                    </div>
                </div>

                {/* Restaurant Akira */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 text-center">
                        <img src={restaurantAkira} alt="Restaurant Akira" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Restaurant Akira</h5>
                            <p className="card-text"><small>Site de vente de produits frais en ligne</small></p>
                            <button className="btn btn-primary" disabled>Voir le site</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Site réalisé avec WordPress</small>
                        </div>
                    </div>
                </div>

                {/* Espace bien-être */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 text-center">
                        <img src={EspaceBienEtre} alt="Espace bien-être" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Espace bien-être</h5>
                            <p className="card-text"><small>Site de vente de produits frais en ligne</small></p>
                            <button className="btn btn-primary" disabled>Voir le site</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Site réalisé avec LARAVEL</small>
                        </div>
                    </div>
                </div>

                {/* SEO */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 text-center">
                        <img src={seo} alt="SEO" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">SEO</h5>
                            <p className="card-text"><small>Amélioration du référencement d'un site web</small></p>
                            <button className="btn btn-primary" disabled>Voir le site</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Utilisation des outils SEO</small>
                        </div>
                    </div>
                </div>

                {/* Création d'une API */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 text-center">
                        <img src={coder} alt="Création d'une API" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Création d'une API</h5>
                            <p className="card-text"><small>Création d'une API RESTful publique</small></p>
                            <button className="btn btn-primary" disabled>Voir le site</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">PHP - SYMFONY</small>
                        </div>
                    </div>
                </div>

                {/* Maquette d'un site web */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 text-center">
                        <img src={screens} alt="Maquette d'un site" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Maquette d'un site web</h5>
                            <p className="card-text"><small>Création d'un prototype de site</small></p>
                            <button className="btn btn-primary" disabled>Voir le site</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Réalisation avec FIGMA</small>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    </div>
  );
}
