const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");
const { API_KEY } = process.env;
const { URL_API } = require("../utils");
const { Dog, Temperament } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  const { name } = req.query;

  let dogPromiseApi = axios.get(`${URL_API}?api_key=${API_KEY}`);
  let dogPromiseDb = Dog.findAll({
    include: Temperament,
  });
  Promise.all([dogPromiseApi, dogPromiseDb]).then((respuesta) => {
    const [dogApi, dogDb] = respuesta;
    let filteredDogs = dogApi.data.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        height: dog.height.imperial,
        weight: dog.weight.imperial,
        years: dog.life_span,
        image: dog.image.url,
        temperament: dog.temperament,
      };
    });
    let allFilteredDogs = [...filteredDogs, ...dogDb];
    if (name) {
      let filterDogs = allFilteredDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      if (filterDogs.length === 0) {
        return res.send("No hay un perro con ese nombre");
      }
      return res.status(200).json(filterDogs);
    }

    res.status(200).json(allFilteredDogs);
  });
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  let dog;
  try {
    if (id.length > 7 && typeof id === "string") {
      dog = await Dog.findByPk(id, {
        include: Temperament,
      });
      return res.status(200).send(dog);
    } else {
      let respuesta = await axios.get(`${URL_API}?api_key=${API_KEY}`);
      let filterDog = respuesta.data.filter((dog) => dog.id == id);
      dog = filterDog.map((dog) => {
        return {
          id: dog.id,
          name: dog.name,
          height: dog.height.imperial,
          weight: dog.weight.imperial,
          life_span: dog.life_span,
          image: dog.image.url,
          temperament: dog.temperament,
        };
      });
    }
    res.status(200).send(dog);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const {
    name,
    weight_min,
    height_min,
    weight_max,
    height_max,
    years_min,
    years_max,
    image,
    temperament,
  } = req.body;

  const id = uuidv4();
  try {
    const createdDog = await Dog.create({
      id,
      name,
      weight_min,
      weight_max,
      height_min,
      height_max,
      years_min,
      years_max,
      image,
    });

    for await (let temp of temperament) {
      const id2 = uuidv4();
      let createdTemperament = await Temperament.findOne({
        where: { name: temp },
      });

      if (!createdTemperament)
        createdTemperament = await Temperament.create({
          id: id2,
          name: temp,
        });

      await createdDog.addTemperament(createdTemperament);
      await createdTemperament.addDog(createdDog);
    }
    res.status(200).send("El perro se ha creado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
