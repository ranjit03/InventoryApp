const knex = require("knex");
const config = require("../../knexfile").development;
const db = knex(config);

function getAllProducts() {
  return db("item");
}

module.exports = {
  getAllProducts
};
