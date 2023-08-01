const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const AuthCode = sequelize.define('AuthCode', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valid_till: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

module.exports = AuthCode;