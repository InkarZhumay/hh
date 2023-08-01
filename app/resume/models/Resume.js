const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const city = require('../../region/city')
// const employmentType = require('./employmentType')
const User = require('../../auth/User')
const Country = require('../../region/country')

const Resume = sequelize.define('Resume', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  main_language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

Resume.belongsTo(city, {foreignKey: 'cityID', as: 'city'});
Resume.belongsTo(User, {foreignKey: 'userID'});
Resume.belongsTo(Country, {foreignKey: 'citizenship', as: 'citizenshipObj'});

module.exports = Resume;