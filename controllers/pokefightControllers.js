const express = require('express');
const data = require('../file.json');

//const Game = require('../models/Game');

const allPokemon = (req, res, next) => {
    res.json(data.pokemonData)
    }

const onePokemon = async (req, res, next) => {
    const { id } = req.params;
    const getPokemon = await data.pokemonData.find((pokemon) => pokemon.id === Number(id));
    res.json(getPokemon)
}

const pokemonInfo = (req, res, next) => {
    const { id, info } = req.params;
    const getPokemon = data.pokemonData.find((pokemon) => pokemon.id === +id);// the + sign is the same as converting string to number
    const getInfo = Object.keys(getPokemon).find((pokemon) => pokemon === info)
    res.json(getPokemon[getInfo])
}

module.exports = {
    allPokemon,
    onePokemon,
    pokemonInfo
}