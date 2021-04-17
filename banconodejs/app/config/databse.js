const knex = require('knex');

module.exports = knex({
  client: 'pg', //indica que se usará postgres como motor de BD
  connection: 'postgres://postgres:sebastian@localhost:5432/mibanco', //cadena de conexión
  pool: { min: 1, max: 2},
  acquireConnectionTimeout: 5000,
})