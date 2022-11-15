const { Router } = require("express");
const { API_KEY } = process.env;
const { URL_API } = require("../utils");
const { Temperament } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const allData = await axios.get(`${URL_API}?api_key=${API_KEY}`);
  try {
    let everyTemperament = allData.data
      .map((dog) => (dog.temperament ? dog.temperament : "No info"))
      .map((dog) => dog?.split(", "));
    let eachTemperament = [...new Set(everyTemperament.flat())];
    eachTemperament.forEach((el) => {
      if (el) {
        Temperament.findOrCreate({
          where: { name: el },
        });
      }
    });
    eachTemperament = await Temperament.findAll();
    res.status(200).json(eachTemperament);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
