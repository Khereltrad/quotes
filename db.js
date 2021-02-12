const Sequelize = require('sequelize');
const CitaModel = require('/Users/claud/Documentos/inforcap/citas_dojo/model/citas');

const sql = new Sequelize('quotes', 'root', '1005', {
  host: 'localhost',
  dialect: 'mysql'
});

const Cita = CitaModel(sql, Sequelize);


// sql.sync()
// .then(() => {
//   console.log('Base de datos y tablas creadas');
// });

module.exports = {
  Cita,
};