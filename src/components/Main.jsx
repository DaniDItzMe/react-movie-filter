import { useState } from "react";
import Filter from "./Filter";
import FormFilm from "./FormFilm";
export default function Main() {
  const genres = ["Fantascienza", "Thriller", "Romantico", "Azione"];

  const initialFilms = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const [films, setFilms] = useState(initialFilms);

  return (
    <div className="container my-5">
      <Filter films={films} setFilms={setFilms} genres={genres}></Filter>
      <FormFilm setFilms={setFilms} genres={genres}></FormFilm>
    </div>
  );
}
