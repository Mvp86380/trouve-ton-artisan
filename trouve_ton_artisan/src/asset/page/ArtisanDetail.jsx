import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Artisans from "../data/artisans.json";

import Rating from "../utilitaire/Rating";

// css
import "../css/formulaire.css";

function ArtisanDetail() {
  const [formData, setFormData] = useState({
    name: "",
    objet: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Nouvel état pour gérer l'affichage du message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire au serveur ici
    // Réinitialiser le formulaire après l'envoi
    setFormData({ name: "", objet: "", message: "" });
    setFormSubmitted(true);
  };

  const { id } = useParams();
  const artisan = Artisans.find((artisan) => artisan.id === id);

  if (!artisan) {
    return <div>Artisan non trouvé</div>;
  }

  return (
    <div>
      <main>
        <div className="container">
        <div className="container">
            
          <h2 className="py-3">{artisan.name}</h2>
          <p>Spécialité: {artisan.specialty}</p>
          <p>
            Note: {artisan.note}/5 
            <Rating rating={parseFloat(artisan.note)} color="#82b864">
              {" "}
            </Rating>
          </p>
          <p>Localisation: {artisan.location}</p>
          <p>E-mail: {artisan.email}</p>
          <p>A propos: {artisan.about}</p>
          <p>Site Web: <a href="">{artisan.website}</a></p>

          <p className="text-center">
            Pour contacter cette entreprise veuillez remplir le formulaire de contact qui se trouve
            ci-dessous.
          </p>
        </div>

        {/* Formulaire de contact */}
        <div className="container my-3">
          <div className="center-form">
            <div className="form-container">
                  {/* Afficher le message de confirmation si le formulaire a été soumis */}
              {formSubmitted && <div className="message-envoi text-center"><p>Le formulaire a bien été envoyé à l'artisan à l'adresse suivante:  {artisan.email}.</p>
              
              <p>Vous aurez une réponse sous 48 heures.</p></div>}
              <form onSubmit={handleSubmit}>
                <h2 className="text-center py-3">Contacter l'artisan</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Objet"
                    id="objet"
                    name="objet"
                    value={formData.objet}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="btn-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default ArtisanDetail;
