import { Fragment, useEffect } from "react";
import axios from "axios";
import no_image from "../assets/no-image.png";
import "../style/BookList.css";

function BookList({ infos, setInfos, auteur, nb }) {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
          auteur +
          "&maxResults=9&startIndex=" +
          nb
      );
      console.log(result.data.items);
      setInfos(result.data.items);
    };
    fetchData();
  }, [auteur, nb, setInfos]);

  return (
    <Fragment>
      {infos != null ? (
        <div className="content">
          <ul className="liste-livre">
            {infos.map((item) => (
              <li key={item.id} className="livre">
                {console.log(item)}
                <div className="content-livre">
                  <a href={item.volumeInfo.previewLink}>
                    <p className="titre">
                      {item.volumeInfo.title.substr(0, 10)}...
                    </p>
                  </a>
                  {item.volumeInfo.description != null ? (
                    <p className="des">
                      {" "}
                      {item.volumeInfo.description.substr(0, 100)}...{" "}
                    </p>
                  ) : (
                    <p>Pas de description</p>
                  )}
                </div>

                {item.volumeInfo.imageLinks != null ? (
                  <img
                    className="img"
                    alt="img-livre"
                    src={item.volumeInfo.imageLinks.thumbnail}
                  />
                ) : (
                  <img className="img" alt="img-livre" src={no_image} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="content">
          <div className="no-livre">
            Pas de livre dispo avec l'auteur : {auteur}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default BookList;
