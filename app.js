require("dotenv").config();
const express = require("express");
const cors = require('cors')
const data = require('./file.json');
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const pokemonRouter = require("./routes/pokemon");


const app = express();

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/pokemon", pokemonRouter);
//app.use('/users', usersRouter);






module.exports = app;
