import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Rating from "../utilitaire/Rating";
import ArtisansBatiment from "../data/artisans.json";

import "../css/categorie.css"

function Batiment() {
  const [batimentArtisans, setBatimentArtisans] = useState([]);

  useEffect(() => {
    const filteredArtisans = ArtisansBatiment.filter((artisan) => artisan.category === "Bâtiment");
    setBatimentArtisans(filteredArtisans);
  }, []);

  return (
    <div>
      <main>
        <div className="container">
          <h3 className="mx-5">Artisans du Bâtiment</h3>

          <div className="row">
            
            {batimentArtisans.map((artisan) => (
              <div className="artisan-cards col-md-6" key={artisan.id}>
                <div  className="card my-2">
                  <h4 className="my-3">{artisan.name}</h4>
                  <div className="ligne">
                    <p>{artisan.specialty}</p>
                    <p>
                      Note: {artisan.note}/5 
                      <Rating rating={parseFloat(artisan.note)} color="#82b864">
                        {" "}
                      </Rating>
                    </p>
                  </div>
                  <p>Localisation: {artisan.location}</p>
                  <p>E-mail: {artisan.email}</p>
                  

                  <div className="button-container my-2">
                  <Link to={`/artisan/${artisan.id}`}>
                    <button type="button">Découvrir l'artisan</button>
                  </Link></div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default Batiment;
