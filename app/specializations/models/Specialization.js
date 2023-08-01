const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const SpecialisationType = require('./SpecialisationType')

const Specialization = sequelize.define('Specialization', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

Specialization.belongsTo(SpecialisationType, {foreignKey: 'SpecializationTypeID'});
SpecialisationType.hasMany(Specialization, {foreignKey: 'specializationTypeId', as: "specializations"})
module.exports = Specialization;