import React from "react";
import { Link } from "react-router-dom";
import Recherche from './Recherche';
import Logo from "../images/Logo.png";
import "../css/style.css"

function Header(){
    return(
        <div>
            <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo trouve ton artisan"></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto text-uppercase">
                <Link className="nav-link" aria-current="page" to="/">
                  Accueil
                </Link>
                <Link className="nav-link" to="/Batiment">
                  Batiment
                </Link>
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
                <Link className="nav-link" to="/Fabrication">
                  Fabrication
                </Link>
                <Link className="nav-link" to="/Alimentation">
                  Alimentation
                </Link>

                <Recherche></Recherche>
              </div>
            </div>
          </div>
        </nav>
      </header>
        </div>
    )
}

export default Header