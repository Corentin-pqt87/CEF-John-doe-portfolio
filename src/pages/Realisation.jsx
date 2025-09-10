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

            <div className='container my-5'>
                <div className='row g-4 justify-content-center'>

                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='Exemple text-center'>
                            <img src={FreshFood} alt="Fresh Food" className='img-fluid' />

                            <h2>Fresh Food</h2>
                            <p><small>Site de vente de produits frais en ligne</small></p>

                            <button className='btn btn-primary' disabled>Voir le site</button>

                            <div className='local-footer'>
                                <small>Site réalisé avec PHP et MySQL</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='Exemple text-center'>
                            <img src={restaurantAkira} alt="Restaurant Akira" className='img-fluid' />

                            <h2>Restaurant Akira</h2>
                            <p><small>Site de vente de produits frais en ligne</small></p>

                            <button className='btn btn-primary' disabled>Voir le site</button>

                            <div className='local-footer'>
                                <small>Site réalisé avec WordPress</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='Exemple text-center'>
                            <img src={EspaceBienEtre} alt="Espace bien-être" className='img-fluid' />

                            <h2>Espace bien-être</h2>
                            <p><small>Site de vente de produits frais en ligne</small></p>

                            <button className='btn btn-primary' disabled>Voir le site</button>

                            <div className='local-footer'>
                                <small>Site réalisé avec LARAVEL</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='Exemple text-center'>
                            <img src={seo} alt="SEO" className='img-fluid' />

                            <h2>SEO</h2>
                            <p><small>Amélioration du référencement d'un site web</small></p>

                            <button className='btn btn-primary' disabled>Voir le site</button>

                            <div className='local-footer'>
                                <small>Utilisation des outils SEO</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='Exemple text-center'>
                            <img src={coder} alt="Création d'une API" className='img-fluid' /> 

                            <h2>Création d'une API</h2>
                            <p><small>Création d'une API RESTful publique</small></p>

                            <button className='btn btn-primary' disabled>Voir le site</button>
                            
                            <div className='local-footer'>
                                <small>PHP - SYMFONY</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='Exemple text-center'>
                            <img src={screens} alt="Maquette d'un site" className='img-fluid' />

                            <h2>Maquette d'un site web</h2>
                            <p><small>Création d'un prototype de site</small></p>

                            <button className='btn btn-primary' disabled>Voir le site</button>

                            <div className='local-footer'>
                                <small>Réalisation avec FIGMA</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
  );
}
