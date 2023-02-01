import { Fragment, useEffect, useState } from "react";
import "../style/App.css";
import { render } from "@testing-library/react";
import axios from "axios";

function App() {
  const [infos, setInfos] = useState([]);
  const [auteur, setAuteur] = useState("");
  const [nb, setNb] = useState(0);

  function previousPage() {
    if (nb>=12) {
      setNb(nb-12);
    }
  }

  function nextPage() {
      setNb(nb+12);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
          auteur +
          "&maxResults=12&startIndex="+nb
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
        }}
      ></input>
      <Fragment>
        {infos != null ? (
          <ul className="liste-livre">
            {infos.map((item) => (
              <li key={item.id} className="livre">
                {console.log(item)}
                <div className="content-livre">
                  <p className="titre">{item.volumeInfo.title}</p>
                </div>

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
      <button onClick={() => nextPage()}>Next</button>
      <button onClick={() => previousPage()}>Previous</button>
    </div>
  );
}

export default App;
