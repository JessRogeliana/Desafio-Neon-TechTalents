'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lancamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    lancamento.belongsTo(models.cliente, {as:"Balance", foreignKey:"idCliente"})
    }
  };
  lancamento.init({
    valor: DataTypes.FLOAT,
    descripcao: DataTypes.STRING,
    saldo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lancamento',
  });
  return lancamento;
};