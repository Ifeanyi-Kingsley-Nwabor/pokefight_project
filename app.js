require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./file.json");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { postFightResult } = require("./controllers/pokefightControllers");

const pokemonRouter = require("./routes/pokemon");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/pokemon", pokemonRouter);
//app.post("/fight/save", postFightResult);

module.exports = app;
