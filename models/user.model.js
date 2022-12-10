const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  apellido: {
    type: String,
    require: true
  },
  edad: {
    type: Number
  },
  email: {
    type: String,
    require: true
  },
  clave: {
    type: String,
    require: true
  }

});

const user = mongoose.model("user", userSchema);
module.exports = user;