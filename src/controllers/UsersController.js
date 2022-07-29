const AppError = require('../utils/AppError');
const knex = require("../database/knex")

class UsersController {

  async create(req, res) {
    const { name, email, password } = req.body
    const emails = await knex('users')
    .select('email')

  
    const userExists = await knex('users')
      .select("*").where('email', [email])

      console.log(userExists);

    if (userExists) {
      throw new AppError("Este email já esta cadastrado")

    }else{
      await knex('users').insert({
        name,
        email,
        password
      })
       
    if (!name) {
      throw new AppError("Nome é obrigatório")
    }
    }
    res.json()
  }

}

module.exports = UsersController;