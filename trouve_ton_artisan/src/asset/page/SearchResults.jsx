import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../utilitaire/Rating";

import "../css/categorie.css";

function SearchResults() {
  const location = useLocation();
  const { filteredArtisans, query } = location.state;

  return (
    <div>
      <main>
        <div className="container">
          <h3 className="mx-3 my-4">Résultats de la recherche pour "{query}":</h3>
          <div className="row">
            {filteredArtisans.map((artisan, index) => (
              <div className="artisan-cards col-md-6" key={artisan.id}>
                <div className="card my-2">
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchResults;
