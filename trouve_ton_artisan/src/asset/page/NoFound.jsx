import Error from "../images/error.png"

function NoFound(){
    return(
        <div >
            <div className="col-md-12 d-flex justify-content-center  my-5"> <img className="img-fluid img-error" src={Error} alt="Erreur 404" /></div>
           <div className="col-md-12 d-flex justify-content-center  my-5"><h2> Erreur 404</h2></div> 
           <div className="col-md-12 d-flex justify-content-center  my-5"><h3>Page non trouvée</h3></div> 
        </div>
    )
}

export default NoFound