const express = require("express");
const router = express.Router();
const { findAll, findOndByName, save, del } = require("../controllers/product.controller");

router.get("/", findAll);
router.get("/:name", findOndByName);
router.post("/", save);
router.delete("/:name", del);

module.exports = router;
