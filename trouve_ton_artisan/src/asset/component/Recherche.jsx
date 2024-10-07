import React, {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import artisansData from "../data/artisans.json"
// CSS
import "../css/style.css"


function Recherche() {
    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();
  
    // Gestion du changement dans l'input de recherche
    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };
  
    // Soumettre la recherche
     const handleSubmit = () => {
            const filteredArtisans = artisansData.filter((artisan) => {
              const { name, specialty, location } = artisan;
              return (
                name.toLowerCase().includes(userInput.toLowerCase()) ||
                specialty.toLowerCase().includes(userInput.toLowerCase()) ||
                location.toLowerCase().includes(userInput.toLowerCase())
              );
            });
      navigate("/search-results", {
        state: {
          filteredArtisans,
          query: userInput 
        },
      });
    };
     return (
        <div >
            <form className="barre-recherche"  >
            <input type="text" placeholder="Rechercher..." id="userInput"
                    onChange={handleInputChange}
                    value={userInput}></input>
            <button type="button" onClick={handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}

export default Recherche
