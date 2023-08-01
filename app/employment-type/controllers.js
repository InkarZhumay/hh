const EmploymentType = require('./employmentType')
const { Op } = require('sequelize');

const getEmploymentType = async (req, res) => {
    const employmentTypes = await EmploymentType.findAll()

    res.status(200).send(employmentTypes)
}


module.exports = {
    getEmploymentType
}