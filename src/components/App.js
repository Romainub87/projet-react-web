import {  useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Pagination from "./Pagination";

function App() {
  const [infos, setInfos] = useState([]);
  const [auteur, setAuteur] = useState("");
  const [nb, setNb] = useState(0);

  return (
    <div className="body">
      <SearchBar nb={nb} setNb={setNb} auteur={auteur} setAuteur={setAuteur} />

      <BookList infos={infos} setInfos={setInfos} auteur={auteur} nb={nb} />
      <Pagination nb={nb} setNb={setNb} infos={infos} />
    </div>
  );
}

export default App;
