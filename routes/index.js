const express = require("express");
const router = express.Router();

const personRouter = require("./person.route");
const productRouter = require("./product.route");

router.use("/person", personRouter);
router.use("/product", productRouter);

module.exports = router;

