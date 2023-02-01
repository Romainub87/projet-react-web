import { Fragment, useEffect, useState } from "react";
import "../style/App.css";
import axios from "axios";
import no_image from "../assets/no-image.png";

function App() {
  const [infos, setInfos] = useState([]);
  const [auteur, setAuteur] = useState("");
  const [nb, setNb] = useState(0);

  function previousPage() {
    if (nb >= 9) {
      setNb(nb - 9);
    }
  }

  function nextPage() {
    setNb(nb + 9);
  }

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
  }, [auteur, nb]);

  return (
    <div className="body">
      <input
        className="input"
        type="text"
        onChange={(e) => {
          setAuteur(e.target.value);
          setNb(0);
        }}
      ></input>

      <Fragment>
        {infos != null ? (
          <div>
            <div className="pagination">
              {nb >= 9 ? (
                <button className="btn-page" onClick={() => previousPage()}>
                  Previous
                </button>
              ) : (
                <button
                  className="btn-page disabled"
                  disabled
                  onClick={() => previousPage()}
                >
                  Previous
                </button>
              )}
              {infos.length === 9 ? (
                <button className="btn-page" onClick={() => nextPage()}>
                  Next
                </button>
              ) : (
                <button
                  className="btn-page disabled"
                  disabled
                  onClick={() => nextPage()}
                >
                  Next
                </button>
              )}
            </div>

            <ul className="liste-livre">
              {infos.map((item) => (
                <li key={item.id} className="livre">
                  {console.log(item)}
                  <div className="content-livre">
                    <a href={item.volumeInfo.previewLink}>
                      <p className="titre">{item.volumeInfo.title}</p>
                    </a>
                    {item.volumeInfo.description != null ? (
                      <p className="des">
                        {" "}
                        {item.volumeInfo.description.substr(0, 125)}...{" "}
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
          <div className="no-livre">
            Pas de livre disponible avec la recherche : {auteur}
          </div>
        )}
      </Fragment>
    </div>
  );
}

export default App;
