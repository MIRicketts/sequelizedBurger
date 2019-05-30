const Sequelize = require ("sequelize");

const connection = new Sequelize("burgers_db", "root", "82ithemar",{
    host : "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });



module.exports = connection;