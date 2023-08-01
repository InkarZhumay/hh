const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume')

const Education = sequelize.define('Education', {
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  university_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faculty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  major: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

Education.belongsTo(Resume, {foreignKey: 'resumeID'});
Resume.hasMany(Education, {foreignKey: 'resumeID', as: 'education'});


module.exports = Education;