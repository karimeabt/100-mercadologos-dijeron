const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ronda = require('./Ronda');
const Equipo = require('./Equipo');

const Resultado = sequelize.define('Resultado', {
  idresultado: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  score_resultado: {
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
  equipo_idequipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Equipo,
      key: 'idequipo',
    },
  },
}, {
  tableName: 'resultado',
  timestamps: false,
});

Resultado.belongsTo(Ronda, {
  foreignKey: 'ronda_idronda',
});
Resultado.belongsTo(Equipo, {
  foreignKey: 'equipo_idequipo',
});

module.exports = Resultado;
