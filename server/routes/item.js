const express = require("express");
const router = express.Router();
const itemDb = require("../db/item");

router.get("/", (req, res) => {
  itemDb.getAllProducts().then(products => res.json(products));
});

module.exports = router;
