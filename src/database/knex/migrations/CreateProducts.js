
exports.up = knex => knex.schema.createTable("products", table => {
  table.increments("id");
  table.text("name");
  table.text("price");
  // table.varchar("category").references("name").inTable("category");
  table.text("description");
  table.integer("inventory");
  table.text("image").nullable();
  table.integer("category_id").references("id").inTable("category");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());


});


exports.down = knex => knex.schema.dropTable("products");