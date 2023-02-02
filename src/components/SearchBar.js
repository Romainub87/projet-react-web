import "../style/SearchBar.css";

function SearchBar({ setAuteur, setNb, setNbPage }) {
  return (
    <div className="bar">
      <h1 className="title">API de recherche Google Books</h1>
      <input
        className="input"
        type="text"
        placeholder="Auteur"
        onChange={(e) => {
          setAuteur(e.target.value);
          setNb(0);
          setNbPage(1);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
