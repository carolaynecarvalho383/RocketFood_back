const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'users','root','123456', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{
  console.log(" conexão realizada com sucesso");
}).catch(err=>{
  console.log("falha na conexão");
})

module.exports = sequelize;