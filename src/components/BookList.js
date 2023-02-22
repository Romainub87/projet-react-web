import { Fragment, useEffect } from "react";
import axios from "axios";
import "../style/BookList.css";
import Book from "./Book";

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
                {item.volumeInfo.imageLinks != null ? (
                <Book 
                lien={item.volumeInfo.previewLink} 
                titre={item.volumeInfo.title}
                description={item.volumeInfo.description}
                image={item.volumeInfo.imageLinks.thumbnail} />)
                 : (
                  <Book 
                lien={item.volumeInfo.previewLink} 
                titre={item.volumeInfo.title}
                description={item.volumeInfo.description}
                image={null} />
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
