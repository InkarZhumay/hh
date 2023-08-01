const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const city = require('../../region/city')
const User = require('../../auth/User')
const Specialization = require('../../specializations/models/Specialization');
const Company = require('../../auth/Company');
const Experience = require('../models/Experience');
const employmentType = require('../../employment-type/employmentType')

const Vacancy = sequelize.define('Vacancy', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary_from: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary_to: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about_company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

Vacancy.belongsTo(city, {foreignKey: 'cityID', as: 'city'});
Vacancy.belongsTo(User, {foreignKey: 'userID'});
Vacancy.belongsTo(Company, {foreignKey: 'companyId', as: 'company'});
Vacancy.belongsTo(Specialization, {foreignKey: 'specializationId', as: 'specialization'});
Vacancy.belongsTo(Experience, {foreignKey: 'experienceId', as: 'experience'});
Vacancy.belongsTo(employmentType, {foreignKey: 'employmentTypeId', as: 'employmentType'});

module.exports = Vacancy;