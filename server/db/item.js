const knex = require("knex");
const config = require("../../knexfile").development;
const db = knex(config);

function getAllProducts() {
  return db("item");
}

function getProduct(name) {
  return db("item").where("name", name || 0);
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
    .update("stock_on_hand", currentstock.stock_on_hand + qtytoadd);
}

function deleteStockFromDb(name, qtytodelete, currentstock) {
  return db("item")
    .where("name", name || 0)
    .update("stock_on_hand", currentstock.stock_on_hand - qtytodelete || 0);
}

module.exports = {
  getAllProducts,
  getProduct,
  addStockToDb,
  getStock,
  deleteStockFromDb
};
