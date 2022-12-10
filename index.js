const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectDB = require("./config/db");

const person = require("./models/person.model");


connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  let personas;
  person.find({})
    .then((data) => {
      // personas = data;
      // console.log(data);
      res.json(data);
    });
});

app.post('/', (req, res) => {
  try {
    const p = new person(req.body);
    let resultado;
    p.save().then((data) => resultado = data);
    return res.json({
      msg: "persona creada",
      details: resultado
    });

  } catch (error) {
    console.log(error);
    return res.json({
      msg: "ocurrió un error",
      details: error.message
    });
  }
})

app.listen(process.env.PORT, () => {
  console.log(`listen in port ${process.env.PORT}`);
});