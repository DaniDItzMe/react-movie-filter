import { useEffect } from "react";
import { useState } from "react";

export default function Filter({ films, setFilms, genres }) {
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState(films);
  const [searchValue, setSearchValue] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    let filteredMovies = [...films];
    console.log("EFFECT");

    if (select) {
      // filteredMovies = filteredMovies.genre.toLowerCase().includes(select.toLowerCase());
      filteredMovies = films.filter(movie => {
        return movie.genre.toLowerCase() == select.toLowerCase()
      })
    } 
    
    if(searchValue) {
      // filteredMovies = filteredMovies.title.toLowerCase().includes(searchValue.toLowerCase());
      filteredMovies = filter.filter(movie => {
        return movie.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    }
    setFilter(filteredMovies);
  }, [films, searchValue, select]);

  return (
    <div>
      <h4 className="text-center">Filtro</h4>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            aria-label="Search by title"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            aria-label="Default select example"
            value={select}
            onChange={(e) => handleSelect(e)}
          >
            <option value="">Tutti i generi</option>
            {genres.map((genre, i) => (
              <option key={i} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <ul>
          {filter.map((film, i) => (
            <li key={i}>
              <p className="bg-primary rounded px-2 py-1 text-white fw-bold">
                {film.genre}
              </p>
              <p className="fw-bold fs-4">{film.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
