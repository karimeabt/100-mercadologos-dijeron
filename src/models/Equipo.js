const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipo = sequelize.define('Equipo', {
  idequipo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_equipo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  secuencia_equipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'equipo',
  timestamps: false,
});

module.exports = Equipo;
