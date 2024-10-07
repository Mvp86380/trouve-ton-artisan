import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footer_bulle"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="triangle"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="logo_footer">
                  <img
                    src="https://www.auvergnerhonealpes.fr/themes/custom/aura_theme/assets/images/optimized/logo/aura-logo-footer.svg"
                    alt="La Région - Auvergne Rhône Alpes"
                    className="img-fluid d-inline-block align-top"
                  ></img>
                </div>
              </div>

              <div className="col-md-6  ">
                <div className="footer_address mx-4 my-4">
                  <div className="address d-flex">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>101 cours Charlemagne <br />
                      CS 20033 <br />
                      69269 LYON CEDEX 02 <br />
                      France <br />
                      Ouvert de 8h15 à 17h du lundi au vendredi
                    </p>
                  </div>
                  <div className="address d-flex">
                    <i className="fa-solid fa-phone"></i>
                    <a href="totel:04.26.73.40.00" className="phone">
                      +33 (0)4 26 73 40 00
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="separation_blanc"></div>
              </div>

              <div className="col-md-12">
                <div className="navigation">
                  <nav className="footer_button my-4">
                    <ul>
                      <li>
                        <Link to="/Mention" className="lien">
                          Mention légales
                        </Link>
                      </li>
                      <li>
                        <Link to="/Donnees" className="lien">
                          Données personnelles
                        </Link>
                      </li>
                      <li>
                        <Link to="/Accessibilite" className="lien">
                          Accessibilité
                        </Link>
                      </li>
                      <li>
                        <Link to="/Cookies" className="lien">
                          Cookies
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reseaux-sociaux"></div>
      </footer>
    </div>
  );
}

export default Footer;
