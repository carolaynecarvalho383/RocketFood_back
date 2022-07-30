const AppError = require('../utils/AppError');
const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite")

class ProductsController {

  async create(req, res) {
    const { name } = req.body

    const database = await sqliteConnection()
    const { category_id } = req.params;

    const nameExists = await database.get("SELECT * FROM products WHERE name = (?)", [name])
     await database.get("SELECT * FROM products Join category  ON category.id = products.category_id")
   

    if(nameExists) {
      throw new AppError("produto já cadastrado")
    }

    
    if (!name || name === "" || name === null) {
      throw new AppError("Não e possível cadastrar um produto sem nome")
    }

    await knex("products").insert({
      name,
      category_id
    })
    res.json()
  }


}
module.exports = ProductsController;