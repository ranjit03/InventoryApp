const express = require("express");
const router = express.Router();
const itemDb = require("../db/item");
var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//route for all products in item table
router.get("/", (req, res) => {
  itemDb.getAllProducts().then(products => res.json(products));
});

//route for a product in item table using name
router.get("/:name", (req, res) => {
  itemDb.getProduct(req.params.name).then(product => res.json(product));
});

router.post("/:name", (req, res) => {
  let qty = req.body;
  let name = qty.nametoadd;
  let qtytoadd = qty.qtytoadd;
  console.log(qty);
  console.log(name);
  console.log(qtytoadd);
  itemDb
    .addStockToDb(name, qtytoadd)
    .then(ids => {
      res.json({});
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
