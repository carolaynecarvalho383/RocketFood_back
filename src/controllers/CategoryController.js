const AppError = require('../utils/AppError');
const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite")

class CategoryController {

  async create(req, res) {
    const { name } = req.body

    const database = await sqliteConnection()
    const nameExists = await database.get("SELECT * FROM users WHERE name = (?)", [name])

    if(nameExists) {
      throw new AppError("categoria já cadastrada")
    }
    await knex("category").insert({
      name
    })
    res.json()
  }

  async update(req, res) {
    const { name } = req.body;
    const { id } = req.params;

    const database = await sqliteConnection()

    const category = await database.get("SELECT * FROM category WHERE id = (?)", [id])

    if (!category) {
      throw new AppError("Usuário não encontrado")
    }

    const checkCategoryName = await database.get("SELECT * FROM category WHERE name = (?)", [name])

    if (checkCategoryName && checkCategoryName.id === category.id) {
      throw new AppError("Esta categoria Já está em uso")
    }

    category.name = name ?? category.name

    await database.run(`
      UPDATE category SET
      name = ?
      WHERE id = ?
    `, [category.name, category.id])



    res.json()
  }

  async delete(req, res) {
    const { id } = req.params

    const database = await sqliteConnection()

    await database.run(`
    DELETE FROM category 
    WHERE id = ?
  `, [id])


    res.json()

  }

}
module.exports = CategoryController;