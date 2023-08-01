'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Country',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cities');
  }
};