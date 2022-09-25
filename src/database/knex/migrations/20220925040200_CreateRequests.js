exports.up = knex => knex.schema.createTable("requests", table => {
  table.increments("id");
  table.text("requestPrice");
  table.text("status");
  table.integer("user_id").references("id").inTable("users");
  table.integer("purchases_id").references("id").inTable("purchases")
  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())

});
exports.down = knex => knex.schema.dropTable("requests");