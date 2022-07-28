const path = require('path');

const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '123456',
    database : 'users'
  }
});

module.exports =knex