import { Link } from "react-router-dom";
import Rating from "../utilitaire/Rating";

import "../css/cardArtisan.css";

const CardArtisant = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center">{props.name}</h4>
        <div className="ligne">
          <div>
            <p>Spécialité: {props.specialty}</p>
            <p>Localisation: {props.location}</p>
            <p>{props.email}</p>
            <p>
              Note: {props.note}/5
              <Rating rating={parseFloat(props.note)} color="#82b864">
                {" "}
              </Rating>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={"/artisan/" + props.id}>
            <button type="button">Découvrir l'artisan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardArtisant;
