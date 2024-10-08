import { Router } from "express";

import { NewFilm } from "../types";
import { readAllFilms, readOneFilm, createOneFilm ,deleteOneFilm,updateOneFilm} from "../services/films";


const router = Router();


// Read all films

router.get("/", (req, res) => {
 
  const durationMax = Number(req.query["minimum-duration"]);

  const filteredFilms = readAllFilms(durationMax);
  if (!filteredFilms) {
    return res.sendStatus(400);
  }
  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const film = readOneFilm(id);

  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  
  const newFilm = createOneFilm({ title, director, duration, budget, description, imageUrl });
  if (!newFilm) {
    return res.sendStatus(409);
  }

  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.sendStatus(400);
  }

  const deletedElements = deleteOneFilm(id);
  return res.json(deletedElements);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim())) ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, imageUrl, description }: Partial<NewFilm> = body;
  const film = updateOneFilm(id, { title, director, duration, budget, description, imageUrl });
  if (!film) {
    return res.sendStatus(404);
  }

  
  return res.json(film);
});

export default router;
