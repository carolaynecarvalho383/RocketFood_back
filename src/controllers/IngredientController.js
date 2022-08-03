const knex = require("../database/knex");

class IngredientController {

  async index(req, res) {
    const { product_id } = req.params

    const ingredients = await knex("ingredients")
      .where({ product_id })

    return res.json(ingredients)
  }

  async update(req, res) {
    const { name,image} = req.body
    const { id } = req.params

    await knex("ingredients").
    where({ id })
    .update({
      name:name,
      image:image
    })
    return res.json(ingredients)
  }
}

module.exports = IngredientController