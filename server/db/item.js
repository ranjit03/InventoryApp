const knex = require("knex");
const config = require("../../knexfile").development;
const db = knex(config);

function getAllProducts() {
  return db("item");
}

function getProduct(name) {
  return db("item").where("name", name);
}

function getStock(name) {
  return db("item")
    .where("name", name)
    .select("stock_on_hand")
    .first();
}
function addStockToDb(name, qtytoadd, currentstock) {
  return db("item")
    .where("name", name)
    .update("stock_on_hand", qtytoadd + currentstock.stock_on_hand);
}

function deleteStockFromDb(name, qtytodelete, currentstock) {
  return db("item")
    .where("name", name)
    .update("stock_on_hand", currentstock.stock_on_hand - qtytodelete);
}

module.exports = {
  getAllProducts,
  getProduct,
  addStockToDb,
  getStock,
  deleteStockFromDb
};
