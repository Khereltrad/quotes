const Sequelize = require('sequelize');
const CitaModel = require('/Users/claud/Documentos/inforcap/citas_dojo/model/citas');

const sql = new Sequelize('quotes', 'root', 'Deoch.1978', {
  host: 'localhost',
  dialect: 'mysql'
});

try{await db.authenticate();
console.log('La conexion se ha establecido.');
} catch (Error){
  console.error('Error al conectar a base de datos:',Error);
}
const Cita = CitaModel(sql, Sequelize);


// sql.sync()
// .then(() => {
//   console.log('Base de datos y tablas creadas');
// });
    
module.exports = {
  Cita,
  sql,
};