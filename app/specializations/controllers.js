const SpecializationType = require('./models/SpecialisationType')
const Specialization = require('./models/Specialization')
const getSpecializations = async (req, res) => {

    const specializationTypes = await SpecializationType.findAll({
        include: {
            model: Specialization,
            as: "specializations"
        }
    })

    res.status(200).send(specializationTypes)

}

module.exports = {
    getSpecializations
}