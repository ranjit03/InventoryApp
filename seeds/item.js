exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("item")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("item").insert([
        {
          id: 1,
          name: "test 1",
          description: "test description 1",
          dimensions: "test dimension 1",
          supplier: "test supplier 1",
          retail_price: "100",
          stock_on_hand: "200"
        },
        {
          id: 2,
          name: "test 2",
          description: "test description 2",
          dimensions: "test dimension 3",
          supplier: "test supplier 3",
          retail_price: "102",
          stock_on_hand: "202"
        },
        {
          id: 3,
          name: "test 3",
          description: "test description 3",
          dimensions: "test dimension 3",
          supplier: "test supplier 3",
          retail_price: "103",
          stock_on_hand: "203"
        }
      ]);
    });
};
