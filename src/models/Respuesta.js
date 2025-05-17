const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ronda = require('./Ronda');

const Respuesta = sequelize.define('Respuesta', {
  idrespuesta: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion_respuesta: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  popularidad_respuesta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ronda_idronda: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ronda,
      key: 'idronda',
    },
  },
}, {
  tableName: 'respuesta',
  timestamps: false,
});

Respuesta.belongsTo(Ronda, {
  foreignKey: 'ronda_idronda',
});

module.exports = Respuesta;
