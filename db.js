const Sequelize = require('sequelize');
const sql = new Sequelize('quotes','root','', {
  host: 'localhost',         //127.0.0.1
  dialect: 'mysql'
});

const Cita = sql.define('Quote', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  who: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quote: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// const Menssage = sql.define('Message', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   who: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   quote: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });


// try{await db.authenticate();
// console.log('La conexion se ha establecido.');
// } catch (Error){
//   console.error('Error al conectar a base de datos:',Error);
// }
// const Cita = CitaModel(sql, Sequelize);


sql.sync()
.then(() => {
  console.log('Base de datos y tablas creadas');
});  


module.exports = {
  Cita,
};






