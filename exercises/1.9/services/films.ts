import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
    {
      id: 3,
      title: "Summer Wars",
      director: "Mamoru Hosoda",
      duration: 114,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
      description:
        "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
      budget: 18.7,
    },
    {
      id: 4,
      title: "The Meyerowitz Stories",
      director: "Noah Baumbach",
      duration: 112,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
      description:
        "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
    },
    {
      id: 5,
      title: "her",
      director: "Spike Jonze",
      duration: 126,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      budget: 23,
    },
  ];

function readAllFilms(durationMax: number): Film[] | undefined {
  const films = parse(jsonDbPath,defaultFilms);
  if(!durationMax){
    return films;
  }
  const durationMaxNumber = Number(durationMax);

  const filteredFilms = films.filter((film) => film.duration <= durationMaxNumber);

  return filteredFilms;

}

function readOneFilm(id: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const idNumber = id;
    const film = films.find((film)=> film.id === idNumber);
    if(!film){
        return undefined;
    }
    return film;
}

function createOneFilm(newFilm: NewFilm ){
  const films = parse(jsonDbPath, defaultFilms);
  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;
    const createdFilm = {
      id: nextId,
      ...newFilm,
    };

  //pris du correctif
  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return undefined;
  }
  //fin du correctif
  else{
    films.push(createdFilm);
  serialize(jsonDbPath, films);
  return createdFilm;
  }
}

function deleteOneFilm(id: number): Film | undefined  {
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return undefined;
  }
  const filmsdeleted = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return filmsdeleted[0];
}

function updateOneFilm(idFilm: number, NewFilm: Partial<Film>): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const film = films.find((film) => film.id === idFilm);
  if (!film) {
    return undefined;
  }

  if (NewFilm.title) {
    film.title = NewFilm.title;
  }
  if (NewFilm.director) {
    film.director = NewFilm.director;
  }
  if (NewFilm.duration) {
    film.duration = NewFilm.duration;
  }
  if (NewFilm.budget) {
    film.budget = NewFilm.budget;
  }
  if (NewFilm.description) {
    film.description = NewFilm.description;
  }
  if (NewFilm.imageUrl) {
    film.imageUrl = NewFilm.imageUrl;
  }
  serialize(jsonDbPath, films);
  return film;
}

export { readAllFilms, readOneFilm, createOneFilm, deleteOneFilm ,updateOneFilm};
