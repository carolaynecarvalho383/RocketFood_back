exports.up = knex => knex.schema.createTable("purchases", table => {
  table.increments("id");
  table.text("name");
  table.integer("user_id").references("id").inTable("users");
  table.integer("product_id").references("id").inTable("products");
  table.timestamp("created_at").default(knex.fn.now());});

exports.down = knex => knex.schema.dropTable("purchases");