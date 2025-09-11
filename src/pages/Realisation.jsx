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

// Composant réutilisable pour une carte
function RealisationCard({ img, alt, titre, description, footer }) {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card h-100 text-center">
        <img src={img} alt={alt} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text"><small>{description}</small></p>
          <button className="btn btn-primary" disabled>Voir le site</button>
        </div>
        <div className="card-footer">
          <small className="text-muted">{footer}</small>
        </div>
      </div>
    </div>
  );
}

// contenue des cartes
const cartesData = [
  {
    img: FreshFood,
    alt: "Fresh Food",
    titre: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    footer: "Site réalisé avec PHP et MySQL"
  },
  {
    img: restaurantAkira,
    alt: "Restaurant Akira",
    titre: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    footer: "Site réalisé avec WordPress"
  },
  {
    img: EspaceBienEtre,
    alt: "Espace bien-être",
    titre: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    footer: "Site réalisé avec LARAVEL"
  },
  {
    img: seo,
    alt: "SEO",
    titre: "SEO",
    description: "Amélioration du référencement d'un site web",
    footer: "Utilisation des outils SEO"
  },
  {
    img: coder,
    alt: "Création d'une API",
    titre: "Création d'une API",
    description: "Création d'une API RESTful publique",
    footer: "PHP - SYMFONY"
  },
  {
    img: screens,
    alt: "Maquette d'un site",
    titre: "Maquette d'un site web",
    description: "Création d'un prototype de site",
    footer: "Réalisation avec FIGMA"
  }
];

export default function Realisation() {
  return (
    <div className="Realisation">
      <div id="header"></div>

      <div className='items-align-center justify-content-center text-center my-5 mx-auto'>
        <div>
          <h1>Portfolio</h1>
          <p><small>Voici quelques-unes de mes réalisations.</small></p>
          <hr className="border border-primary border-2 opacity-100 mx-auto" style={{ width: "35%" }} />
        </div>

        <div className="row g-4 justify-content-center">
          {cartesData.map((carte, index) => (
            <RealisationCard
              key={index}
              img={carte.img}
              alt={carte.alt}
              titre={carte.titre}
              description={carte.description}
              footer={carte.footer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
