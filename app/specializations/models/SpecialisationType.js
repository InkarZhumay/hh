const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const SpecialisationType = sequelize.define('SpecialisationType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

module.exports = SpecialisationType;