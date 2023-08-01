const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Country = require('./country')

const City = sequelize.define('City', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

City.belongsTo(Country, {foreignKey: 'countryId'});

module.exports = City;