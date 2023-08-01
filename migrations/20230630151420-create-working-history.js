'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WorkingHistories', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      responsibilities: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resumeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Resumes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WorkingHistories');
  },
};