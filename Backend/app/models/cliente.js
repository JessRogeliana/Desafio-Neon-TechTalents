'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cliente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};