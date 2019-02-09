exports.up = function(knex, Promise) {
  return knex.schema.createTable("item", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("description");
    table.string("dimensions");
    table.string("supplier");
    table.integer("retail_price");
    table.integer("stock_on_hand");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("item");
};
