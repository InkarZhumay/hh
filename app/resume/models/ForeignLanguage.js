const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume')

const ForeignLanguage = sequelize.define('ForeignLanguage', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

ForeignLanguage.belongsTo(Resume, {foreignKey: 'resumeID'});
Resume.hasMany(ForeignLanguage, {foreignKey: 'resumeID', as: 'foreignLanguages'});


module.exports = ForeignLanguage;