const express = require('express');
const router = express.Router();
const data = require('../file.json');
const {
    allPokemon,
    onePokemon,
    pokemonInfo
} = require('../controllers/pokefightControllers')


/* GET home page. */
router.get('/', allPokemon)


router.get('/:id', onePokemon);

router.get('/:id/:info', pokemonInfo)


module.exports = router;
