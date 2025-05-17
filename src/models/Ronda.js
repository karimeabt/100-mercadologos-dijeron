const {DataTypes} = require('sequelize');
const sequelize =require('../config/database');

const Ronda = sequelize.define('Ronda', {
    idronda: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    descripcion_ronda: {
        type: DataTypes.STRING(350),
        allowNull: false,
    },
}, {
    tableName: 'ronda',
    timestamps:false,
    });

module.exports = Ronda;