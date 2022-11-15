const { Router } = require("express");

const dogsRoute = require("./dog");
const temperamentsRoute = require("./temperament");

const router = Router();

router.use("/dogs", dogsRoute);
router.use("/temperaments", temperamentsRoute);

module.exports = router;
