const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mercadologos_dijeron', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // o 'postgres'
});

module.exports = sequelize;
