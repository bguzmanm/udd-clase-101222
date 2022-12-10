const product = require("../models/product.model");

const findAll = async (req, res) => {
  try {
    const productos = await product.find();
    return res.json(productos);
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  }
}
const findOndByName = async (req, res) => {
  try {
    const filter = {
      nombre: req.params.name
    }

    const productos = await product.find(filter);
    return res.json({ productos });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  }
}
const save = async (req, res) => {
  try {

    const producto = new product(req.body);
    const respuesta = producto.save();

    return res.json({
      msg: "producto guardado",
      details: respuesta
    });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  }
}
const del = async (req, res) => {
  try {
    await product.deleteOne({ name: req.params.name });
    return res.json({
      msg: "Ok!",
      details: `${req.params.name} ha sido borrado`
    });
  } catch (e) {
    console.log(error);
    return res.json({
      msg: "error",
      details: error.message
    });
  }
}

module.exports = {
  findAll,
  findOndByName,
  save,
  del
}