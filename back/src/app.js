require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect.js");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

const admRotas = require("./rotas/admRotas.js");
const cadastroRotas = require("./rotas/cadastroRotas.js");

app.use("/sistema/adm",admRotas);
app.use("/sistema/cadastro",cadastroRotas);


module.exports = app;