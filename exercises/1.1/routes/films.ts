import { Router } from "express";
import { Film } from "../types";



const films: Film[] = [
{
    id:1,
    title:"Inception",
    director:'Christopher Nolan',
    duration:148,
    budget:160,
    imageUrl:"https://www.example.com/inception-image"
},
{
    id:2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    budget: 6,
    imageUrl: "https://www.example.com/godfather-image"
},
{
    id:3,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    budget: 63,
    imageUrl: "https://www.example.com/matrix-image"
}
]


const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;