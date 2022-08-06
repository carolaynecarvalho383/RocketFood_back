const knex = require("../database/knex");
const DiskStorage = require('../providers/DiskStorage');

const diskStorage = new DiskStorage()

class IngredientController {

  async index(req, res) {
    const { product_id } = req.query


    const ingredients = await knex("ingredients")
      .where({ product_id })

    return res.json(ingredients)
  }

  async create(req, res) {
    const { name } = req.body
    const product_id  = req.params
    console.log(product_id);
    const ingredientsFilename = req.file.filename;
    

     const ingredientFilename = await diskStorage.saveFile(ingredientsFilename)

     console.log(ingredientFilename);

     const ingredients = await knex("ingredients")
      .insert({
        name,
        product_id: 1,
        image: ingredientFilename
      })

      console.log(ingredients);
    return res.json(ingredients)
  }
}

module.exports = IngredientController