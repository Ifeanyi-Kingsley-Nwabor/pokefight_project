const express = require("express");
const router = express.Router();
const data = require("../file.json");
const {
  allPokemon,
  onePokemon,
  pokemonInfo,
  postFightResult,
} = require("../controllers/pokefightControllers");

router.post("/fight/save", postFightResult);

/* GET home page. */
router.get("/", allPokemon);

router.get("/:id", onePokemon);

router.get("/:id/:info", pokemonInfo);

module.exports = router;
