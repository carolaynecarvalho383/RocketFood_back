exports.up = knex => knex.schema.createTable("ingredients", table => {
  table.increments("id");
  table.text("name");
  table.text("image").nullable();
  table.integer("product_id").references("id").inTable("products").onDelete("CASCADE")
});


exports.down = knex => knex.schema.dropTable("ingredients");