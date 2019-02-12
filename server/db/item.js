const knex = require("knex");
const config = require("../../knexfile").development;
const db = knex(config);

function getAllProducts() {
  return db("item");
}

function getProduct(name) {
  return db("item").where("name", name);
}

function addStockToDb(name, qty) {
  const initialQty = db("item")
    .where("name", name)
    .select("stock_on_hand");

  return db("item")
    .where("name", name)
    .update("stock_on_hand", initialQty + qty);
}

module.exports = {
  getAllProducts,
  getProduct,
  addStockToDb
};
