import "../style/SearchBar.css";

function SearchBar({ setAuteur, setNb }) {
  return (
    <div className="bar">
      <h1 className="title">API de recherche Google</h1>
      <input
        className="input"
        type="text"
        placeholder="Auteur"
        onChange={(e) => {
          setAuteur(e.target.value);
          setNb(0);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
