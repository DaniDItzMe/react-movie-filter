import { useState } from "react";

export default function FormFilm({ setFilms, genres }) {
  const initialFormData = {
    formTitle: "",
    formGenre: genres[0],
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    setFormData((c) => {
      return {
        ...c,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.formTitle == "") return;

    setFilms((c) => [
      ...c,
      {
        title: formData.formTitle,
        genre: formData.formGenre,
      },
    ]);

    setFormData(initialFormData);
  };

  return (
    <div>
      <h4>Aggiungi un nuovo film</h4>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <div className="row g-4">
          <div className="col-6">
            <label htmlFor="formTitle" className="form-label">
              Titolo
            </label>
            <input
              type="text"
              id="formTitle"
              name="formTitle"
              className="form-control"
              value={formData.formTitle}
              onChange={(e) => handleFormData(e)}
            ></input>
          </div>
          <div className="col-6">
            <label htmlFor="formGenre" className="form-label">
              Genere
            </label>
            <select
              className="form-select"
              name="formGenre"
              value={formData.formGenre}
              onChange={(e) => handleFormData(e)}
              id="formGenre"
              aria-label="Default select example"
            >
              {genres.map((genre, i) => (
                <option key={i} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-100">
              Aggiungi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
