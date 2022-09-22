const knex = require("../database/knex");


class LoadProductController {

 

  async show(req, res) {

    //const user_id = req.
  
    
    const allProducts = await knex("products")

   

    return res.json({ allProducts });
  }

  async showCategory(req, res) {

    const {category} = req.query
    console.log(category);

  
    
    const allProducts = await knex("products")
    .where({ category: category})
    
   

    return res.json({ allProducts });
  }

}

module.exports = LoadProductController;