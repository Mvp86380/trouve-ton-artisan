import React from "react";
import { useEffect, useState } from "react";

import artisansDatas from "../data/artisans.json";
import CardArtisan from "../component/CardArtisan";
//css
import "../css/home.css";
// images
import Patissier from "../images/patissier.jpg";
import Coiffeur from "../images/coiffeur.jpg";
import Menuisier from "../images/menuisier.jpg";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    const topArtisansData = artisansDatas
      .sort((a, b) => parseFloat(b.note) - parseFloat(a.note))
      .filter((artisan, index) => index < 3);

    setTopArtisans(topArtisansData);
  }, []);

  //sécurité
  // Empêche l'affichage du clic droit
  const handleContextMenu = (e) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-fluid py-4">Bienvenue sur "Trouve ton Artisan !"</h1>

              <div className="presentation">
                <div className="text-presentation">
                  <h2>Trouvez facilement un artisan pour vos projets</h2>
                  <p>
                    La région Auvergne-Rhône-Alpes, vous propose cette plateforme afin de trouver
                    des artisans qualifiés au sein de votre région. Nous facilitons la mise en
                    relation entre les particuliers et les artisans pour tous types de projets, que
                    ce soit pour des travaux de rénovation, de construction, de décoration ou
                    autres.
                  </p>
                </div>
              </div>
            </div>

            <div className="etape">
              <div className="text-etape col-md-6">
                <div className="red"></div>
                <h3 className="py-2">Comment choisir son artisan ?</h3>

                <h4 className="py-1">1/ Choisir la catégorie d'artisanat </h4>
                <p>
                  Utilisez notre menu pour sélectionner la catégorie correspondante à votre projet.
                  Que vous ayez besoin d'un patissier, d'un électricien, d'un menuisier ou d'un
                  coiffeur, nous avons une liste complète d'artisans dans chaque domaine.
                </p>

                <h4 className="py-1">2/ Choisir un artisan </h4>
                <p>
                  Parcourez les profils des artisans disponibles dans la catégorie que vous avez
                  choisie. Consultez leurs compétences, leurs réalisations précédentes et les avis
                  des clients pour trouver celui qui correspond le mieux à votre besoin.
                </p>

                <h4 className="py-1">3/ Contacter l'artisan via le formulaire de contact </h4>
                <p>
                  Une fois que vous avez trouvé l'artisan idéal, contactez-le facilement via notre
                  formulaire de contact que vous trouverez sous la fiche de l'artisan. Posez-lui
                  toutes vos questions, demandez des renseignements sur ses prestations ou demandez
                  un devis personnalisé.
                </p>

                <h4 className="py-1">4/ Une réponse sous 48h </h4>
                <p>
                  Nous nous engageons à vous fournir une réponse sous 48 heures. Notre équipe est là
                  pour répondre à toutes vos demandes et vous aider à concrétiser vos projets en
                  trouvant le bon artisan.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={Patissier} alt="Un patissier qui pétrie une pâte" onContextMenu={handleContextMenu} className="img-fluid" />
              </div>
            </div>

            <div className="pourquoi ">
              <div className="col-md-6 d-flex justify-content-center my-3">
                <img src={Menuisier} alt="Un menuisiser" onContextMenu={handleContextMenu} className="img-fluid" />
              </div>

              <div className="col-md-6">
                <div className="pourquoi-text py-5">
                  <div className="green"></div>
                  <h3 className="">Pourquoi choisir "Touve ton Artisan !"</h3>

                  <ul>
                    <li>Large sélection d'artisans qualifiés dans divers domaines.</li>
                    <li>Facilité de recherche et de contact grâce à notre interface conviviale.</li>
                    <li>
                      Service client réactif et assistance personnalisée pour répondre à toutes vos
                      questions.
                    </li>
                    <li>
                      Garantie d'une réponse sous 48 heures pour toutes vos demandes de
                      renseignements ou devis.
                    </li>
                  </ul>

                  <p>
                    Commencez dès maintenant à chercher l'artisan essentiel à votre projet en
                    utilisant notre plateforme simple et efficace !
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 d-flex justify-content-center my-3">
              <div className="separation"></div>
            </div>

            {/* partie top3  */}
            <div className="mt-3">
              <h3>Les trois artisans du mois</h3>

              <div className="row">
                {topArtisans.map((artisan) => (
                  <div className="col-md-4 my-3" key={artisan.id}>
                    <CardArtisan
                      id={artisan.id}
                      name={artisan.name}
                      specialty={artisan.specialty}
                      note={artisan.note}
                      location={artisan.location}
                      email={artisan.email}
                    ></CardArtisan>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
