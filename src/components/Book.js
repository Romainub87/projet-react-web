/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment } from "react";
import no_image from "../assets/no-image.png";

function Book(props) {
    return (
        <Fragment>
             <div className="content-livre">
                  <a href={props.lien}>
                    { props.titre != null ? (
                    <p className="titre">
                      {props.titre.substr(0, 10)}...
                    </p>) : <p>Pas de titre</p> }
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
               { props.image !== null ?
                <img src={props.image} alt="image" width="100" /> 
               : 
                <img src={no_image} alt="no-image" width="100"/>
               }
        </Fragment>
    )
}

export default Book;