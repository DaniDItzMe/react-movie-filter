import { useEffect } from "react";
import { useState } from "react";

export default function Filter({ films, setFilms, genres }) {
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState(films);
  const [searchValue, setSearchValue] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
    setSearchValue("");
  };

  useEffect(() => {
    console.log("EFFECT");
    setFilter(
      films.filter((film) => {
        if (select) {
          return film.genre.toLowerCase().includes(select.toLowerCase());
        } else {
          return film.title.toLowerCase().includes(searchValue.toLowerCase());
        }
      }),
    );
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
              setSelect("");
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
            <option value="">Nessun genere</option>
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
