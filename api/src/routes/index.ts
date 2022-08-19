import {
  addBandReview,
  createMusicBand,
  getAllMusicBands,
  getMusicBand,
} from "../db/models/musicBandModel";
import { addPlaceReview, createPlace, getAllPlaces, getPlaceByID, getPlaceByName, getCities } from "../db/models/placeModel";

const { Router } = require("express");

const router = Router();

// router.use(/* ALGO */);

router.get("/musicbands", async (req: any, res: any) => {
  try {
    const musicBands = await getAllMusicBands();
    if (musicBands) {
      return res.status(200).send(musicBands);
    } else {
      return res.status(404).send({
        msg: "No se encontraron bandas",
      });
    }
  } catch (error) {
    return {error};
  }
});

router.post("/musicbands", async (req: any, res: any) => {
  const musicBand = req.body.newMusicBand;
  if (musicBand) {
    try {
      await createMusicBand(musicBand);
      res.status(201).send({ msg: "Se creo la banda exitosamente" });
    } catch (error) {
      return {error};
      res.status(404).send({ error: error });
    }
  } else {
    res.status(400).send({ msg: "Data faltante o incorrecta" });
  }
});

router.post("/bandreviews", async (req: any, res: any) => {
  const { review, email } = req.body;

  if (review && email) {
    try {
      await addBandReview(email, review);
      return res.status(201).send({ msg: "Se añadio la reseña exitosamente" });
    } catch (error) {
      return {error};
    }
  } else {
    res.status(400).send({ msg: "Data faltante o incorrecta" });
  }
});

router.get("/musicband", async (req: any, res: any) => {
  const { email } = req.body;
  try {
    const musicBand = await getMusicBand(email);
    if (musicBand) {
      return res.status(200).send(musicBand);
    } else {
      return res.status(404).send({
        msg: "No se encontraron bandas",
      });
    }
  } catch (error) {
    return {error};
  }
});

/// ACA ARRANCAN RUTAS DEL PLACE

router.get("/places", async (req: any, res: any) => {
  let {city, sound} = req.query;
  try {
    let response = await getAllPlaces(city, sound);
    if (response) {
      return res.status(200).send(response);
    } else {
      return res.status(404).send({ msg: "Lugares no encontrados" });
    }
  } catch (error) {
    return {error};
  }
});

router.post("/places", async (req: any, res: any) => {
  const places = req.body.newPlace;
  if (places) {
    try {
      await createPlace(places);
      res.status(201).send({ msg: "Se creo el lugar exitosamente" });
    } catch (error) {
      return {error};
      res.status(404).send({ error: error });
    }
  } else {
    res.status(400).send({ msg: "Data faltante o incorrecta" });
  }
});

router.post("/placereviews", async (req: any, res: any) => {
  const { review, email } = req.body;

  if (review && email) {
    try {
      await addPlaceReview(email, review);
      return res.status(201).send({ msg: "Se añadio la reseña exitosamente" });
    } catch (error) {
      return {error};
    }
  } else {
    res.status(400).send({ msg: "Data faltante o incorrecta" });
  }
});

router.get("/place/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const place = await getPlaceByID(id);
  id === undefined ? res.status(404).send({ msg: "Invalid data" }) : res.status(200).send(place);
});

router.get("/places/names", async (req: any, res: any) => {
  let { search } = req.query;
  if(!search) return res.status(404).send({msg : "Invalid data"});
  search = decodeURI(search);
  const places = await getPlaceByName(search);
  places ? res.status(200).send(places) : res.status(400).send({ msg: "Not Found" });
});

router.get("/cities",async (req:any, res:any) => {
  try {
    let cities = await getCities();
    if(cities) return res.status(200).send(cities);
    return {error: "Error in function"}
  } catch (error) {
    return {error}
  }
})

module.exports = router;
