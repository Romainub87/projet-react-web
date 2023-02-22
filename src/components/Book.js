import { Fragment } from "react";
import no_image from "../assets/no-image.png";

function Book(props) {
    return (
        <Fragment>
             <div className="content-livre">
                  <a href={props.lien}>
                    <p className="titre">
                      {props.titre.substr(0, 10)}...
                    </p>
                  </a>
                  {props.description != null ? (
                    <p className="des">
                      {" "}
                      {props.description.substr(0, 100)}...{" "}
                    </p>
                  ) : (
                    <p>Pas de description</p>
                  )}
               </div>
            
            
        </Fragment>
    )
}

export default Book;