const AppError = require('../utils/AppError');
const Users = require("../database/mySql/Users")
class UsersController {

 async create(req, res) {
    const { name, email, password } = req.body
    await Users.create(req.body)
    .then(()=>{
      return res.status(200).json({
        error:false,
        message: "Usuário cadastrado com sucesso"
      })
    }).catch((error)=>{
      return res.status(400).json({
        error:false,
        message: "Error: Usuário não cadastrado com sucesso"
      })
    })

   
    if(!name){
      throw new AppError("Nome é obrigatório")
    }
    res.status(201).json({ name, email, password })
  }


}

module.exports = UsersController;