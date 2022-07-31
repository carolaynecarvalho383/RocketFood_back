const AppError = require('../utils/AppError');
const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite")

class CategoryController {

  async create(req, res) {
    const { category_name } = req.body

    const database = await sqliteConnection()
    const category_nameExists = await database.get("SELECT * FROM category WHERE category_name = (?)", [category_name])

    if (category_nameExists) {
      throw new AppError("categoria já cadastrada")
    }
    await knex("category").insert({
      category_name
    })
    return res.json()
  }

  async update(req, res) {
    const { category_name } = req.body;
    const { id } = req.params;

    const database = await sqliteConnection()

    const category = await database.get("SELECT * FROM category WHERE id = (?)", [id])

    if (!category) {
      throw new AppError("Usuário não encontrado")
    }

    const checkCategorycategory_name = await database.get("SELECT * FROM category WHERE category_name = (?)", [category_name])

    if (checkCategorycategory_name && checkCategorycategory_name.id === category.id) {
      throw new AppError("Esta categoria Já está em uso")
    }

    category.category_name = category_name ?? category.category_name

    await database.run(`
      UPDATE category SET
      category_name = ?
      WHERE id = ?
    `, [category.category_name, category.id])



    return res.json()
  }

  async delete(req, res) {
    const { id } = req.params

    const database = await sqliteConnection()

    await database.run(`
    DELETE FROM category 
    WHERE id = ?
  `, [id])


   return res.json()

  }

  async show(req, res) {
    const { id } = req.params

    const category = await knex("category").where({ id }).first()
    const product = await knex("products").where({ id_category: id })

    //const ingredient = await knex("ingredients").where({product_id: id})
    //console.log(ingredient);
    return res.json({
      ...category,
      product

    });
  }

}
module.exports = CategoryController;