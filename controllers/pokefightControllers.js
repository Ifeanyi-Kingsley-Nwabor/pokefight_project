const express = require("express");
const data = require("../file.json");
const db = require("../database/db");
const Game = require("../models/Game");

//const Game = require('../models/Game');

const allPokemon = (req, res, next) => {
  res.json(data.pokemonData);
};

const onePokemon = async (req, res, next) => {
  const { id } = req.params;
  const getPokemon = await data.pokemonData.find(
    (pokemon) => pokemon.id === Number(id)
  );
  res.json(getPokemon);
};

// const pokemonInfo = (req, res, next) => {
//   const { id, info } = req.params;
//   const getPokemon = data.pokemonData.find((pokemon) => pokemon.id === +id); // the + sign is the same as converting string to number
//   const getInfo = Object.keys(getPokemon).find((pokemon) => pokemon === info);
//   res.json(getPokemon[getInfo]);
// };

const pokemonInfo = (req, res) => {
  const { id, info } = req.params;
  const getPokemon = data.pokemonData.find((pokemon) => pokemon.id === +id);
  if (info === "name") {
    return res.send(getPokemon.name);
  } else if (info === "type") {
    return res.send(getPokemon.type);
  } else if (info === "base") {
    return res.send(getPokemon.base);
  } else {
    res.send(`${info} is not a valid query`);
  }
};

const postFightResult = async (req, res) => {
  const { pokemonA, pokemonB, winner } = req.body;

  try {
    const newFightResult = await FightResult.create({
      pokemonA,
      pokemonB,
      winner,
    });
    res.json(newFightResult);
  } catch (e) {
    res.status(500).send(e);
  }
  // res.send("Hello Im the response");
};

module.exports = {
  allPokemon,
  onePokemon,
  pokemonInfo,
  postFightResult,
};
