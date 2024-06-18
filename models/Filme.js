const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

class Filme extends Model {}

Filme.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano_lancamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  diretor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avaliacao: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Filme',
  tableName: 'filme'
});

module.exports = Filme;
