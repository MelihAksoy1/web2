import { SyntheticEvent, useState } from "react";
import Film from "./film";
import { film } from "../../types";

const defaultFilms = [
  {
    id: 1,
    titre: "film numéro 1",
    director: "Melih Aksoy",
    duree: 100,
    image: "eoededededz",
    description: "C'est un film cool",
    budget: 10000000,
  },
  {
    id: 2,
    titre: "film numéro 2",
    director: "Melih Aksoy",
    duree: 100,
    image: "eoededededz",
    description: "C'est un film cool",
    budget: 10000000,
  },
  {
    id: 3,
    titre: "film numéro 3",
    director: "Melih Aksoy",
    duree: 100,
    image: "eoededededz",
    description: "C'est un film cool",
    budget: 10000000,
  },
  {
    id: 4,
    titre: "film numéro 4",
    director: "Melih Aksoy",
    duree: 100,
    image: "eoededededz",
    description: "C'est un film cool",
    budget: 10000000,
  },
  {
    id: 5,
    titre: "film numéro 5",
    director: "Melih Aksoy",
    duree: 100,
    image: "eoededededz",
    description: "C'est un film cool",
    budget: 10000000,
  },
];

const Main = () => {
  const [films, setFilms] = useState(defaultFilms);
  const [titre, setTitre] = useState("");
  const [director, setDirector] = useState("");
  const [duree, setDuree] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleTitreChange = (e: SyntheticEvent) => {
    const titreInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", titreInput.value);
    setTitre(titreInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDureeChange = (e: SyntheticEvent) => {
    const dureeInput = e.target as HTMLInputElement;
    console.log("change in dureeInput:", dureeInput.value);
    setDuree(parseInt(dureeInput.value));
  };

  const handleImageChange = (e: SyntheticEvent) => {
    const imageInput = e.target as HTMLInputElement;
    console.log("change in imageInput:", imageInput.value);
    setImage(imageInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    setBudget(parseInt(budgetInput.value));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newFilm = {
      id: nextFilmId(films),
      titre: titre,
      director: director,
      duree: duree,
      image: image,
      description: description,
      budget: budget,
    };
    setFilms([...films, newFilm]);
  };

  return (
    <div>
      <Film films={films} />
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Titre</label>
          <input
            value={titre}
            type="text"
            id="titre"
            name="titre"
            onChange={handleTitreChange}
            required
          />
          <label>Director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />
          <label>Durée</label>
          <input
            value={duree}
            type="number"
            id="duree"
            name="duree"
            onChange={handleDureeChange}
            required
          />

          <label>Image</label>
          <input
            value={image}
            type="text"
            id="image"
            name="image"
            onChange={handleImageChange}
          />

          <label>Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
          />

          <label>Budget</label>
          <input
            value={budget}
            type="number"
            id="budget"
            name="budget"
            onChange={handleBudgetChange}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

const nextFilmId = (films: film[]) => {
  return films.reduce((maxId, pizza) => Math.max(maxId, pizza.id), 0) + 1;
};

export default Main;
