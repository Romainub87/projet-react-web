import { Fragment, useEffect, useState } from "react";
import "../style/App.css";
import { render } from "@testing-library/react";
import axios from "axios";

function App() {
  const [infos, setInfos] = useState([]);
  const [auteur, setAuteur] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" + auteur
      );

      setInfos(result.data.items);
    };
    fetchData();
  }, [auteur]);

  return (
    <div className="body">
      <input
        className="input"
        type="text"
        onChange={(e) => {
          setAuteur(e.target.value);
        }}
      ></input>
      <Fragment>
        {infos != null ? (
          <ul className="liste-livre">
            {infos.map((item) => (
              <li key={item.id} className="livre">
                {console.log(item)}
                <p className="titre">{item.volumeInfo.title}</p>
                {item.volumeInfo.imageLinks != null ? (
                  <img
                    className="img"
                    alt="img-livre"
                    src={item.volumeInfo.imageLinks.thumbnail}
                  />
                ) : (
                  <h2>Pas d'image disponible</h2>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </Fragment>
    </div>
  );
}

export default App;
