exports.up = knex => knex.schema.createTable("ingredients", table => {
  table.increments("id");
  table.text("ingredientName").notNullable();
  table.text("ingredientImage")
  table.integer("product_id").references("id").inTable("products").onDelete("CASCADE")
});


exports.down = knex => knex.schema.dropTable("ingredients");