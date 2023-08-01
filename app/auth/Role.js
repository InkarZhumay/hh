const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./User');
const Company = require('./Company');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
 
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);
// User.belongsTo(Role, {foreignKey: 'roleId'})
// User.belongsTo(Company, {foreignKey: 'CompanyId'})

module.exports = Role;