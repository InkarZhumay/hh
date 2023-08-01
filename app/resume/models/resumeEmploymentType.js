const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume')
const EmploymentType = require('../../employment-type/employmentType')

const resumeEmploymentType = sequelize.define('resumeEmploymentType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    
}, {
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
});

// resumeEmploymentType.belongsTo(Resume, {foreignKey: 'resumeID'});
// resumeEmploymentType.belongsTo(EmploymentType, {foreignKey: 'уmploymentType'});

Resume.belongsToMany(EmploymentType, { through: resumeEmploymentType, foreinKey: 'resumeId', otherKey: 'employmentTypepId', as: 'EmploymentTypes' });
EmploymentType.belongsToMany(Resume, { through: resumeEmploymentType, foreinKey: 'employmentTypepId', otherKey: 'resumeId'  });

// Resume.hasMany(resumeEmploymentType, {
//     foreignKey: 'resumeId',
// });

// Resume.hasMany(resumeEmploymentType, {
//     foreignKey: 'employmentTypepId',
// });


module.exports = resumeEmploymentType;