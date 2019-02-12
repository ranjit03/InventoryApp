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
  console.log(qty);
  let name = qty.nametoadd;
  let qtytoadd = Number(qty.qtytoadd);

  itemDb.getStock(name).then(currentstock => {
    itemDb
      .addStockToDb(name, qtytoadd, currentstock)
      .then(ids => {
        res.json({});
      })
      .catch(err => {});
  });
});

router.post("/delete/:name", (req, res) => {
  let qty = req.body;
  let name = qty.nametodelete;
  let qtytodelete = Number(qty.qtytodelete);
  console.log(qty);
  console.log(name);
  console.log(qtytodelete);

  itemDb.getStock(name).then(currentstock => {
    console.log(currentstock);
    itemDb
      .deleteStockFromDb(name, qtytodelete, currentstock)
      .then(ids => {
        res.json({});
      })
      .catch(err => {});
  });
});

router.post("/add/", (req, res) => {
  let itemToAdd = req.body;
  console.log(itemToAdd);
});

module.exports = router;
