import {  useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Pagination from "./Pagination";

function App() {
  const [infos, setInfos] = useState([]);
  const [auteur, setAuteur] = useState("");
  const [nb, setNb] = useState(0);
  const [nbPage, setNbPage] = useState(1);

  return (
    <div className="body">
      <SearchBar  setNb={setNb} setNbPage={setNbPage} setAuteur={setAuteur} />

      <BookList infos={infos} setInfos={setInfos} auteur={auteur} nb={nb} setNb={setNb}  />
      <Pagination nb={nb} setNb={setNb} infos={infos} setNbPage={setNbPage} nbPage={nbPage} />
    </div>
  );
}

export default App;
