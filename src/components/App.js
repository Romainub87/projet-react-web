import { Fragment, useEffect, useState } from "react";
import "../style/App.css";
import { render } from "@testing-library/react";
import axios from "axios";

function App() {
  const [infos, setInfos] = useState([]);
  const [auteur, setAuteur] = useState("Journet");

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
    <div>
      <input
        type="text"
        onChange={(e) => {
          setAuteur(e.target.value);
        }}
      ></input>
      <Fragment>
        {infos != null ? (
          <ul>
            {infos.map((item) => (
              <li key={item.id}>
                {console.log(item)}
                <p>
                  {"Auteur : " +
                    item.volumeInfo.authors +
                    " /  Titre : " +
                    item.volumeInfo.title}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </Fragment>
    </div>
  );
}

export default App;
