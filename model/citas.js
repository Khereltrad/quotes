// const { DataTypes } = require('sequelize');
// const db = require('../config/sequelize.config.js');  //Esto es nuestra base de datos conectada hemos hecho anteriormente

module.exports = (sql, type) => {
    return sql.define('quotes', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      author: type.STRING,
      quote: type.STRING
    });
  }