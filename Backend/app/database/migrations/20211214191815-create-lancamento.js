'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lancamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.STRING
      },
      descripcao: {
        type: Sequelize.STRING
      },
      saldo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('lancamentos');
  }
};