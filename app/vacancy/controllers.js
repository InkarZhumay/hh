const { Model } = require('sequelize')
const Experience = require('./models/Experience')
const Company = require('../auth/Company')
const City = require('../region/city')
const EmploymentType = require('../employment-type/employmentType')
const Specialization = require('../specializations/models/Specialization')
const Vacancy = require('./models/Vacancy')
const { Op } = require('sequelize')

const getExperiences = async (req, res) => {

    const exps = await Experience.findAll()
    res.status(200).send(exps)

}
const createVacancy = async (req, res) => {
    console.log(req.body);

    // const company = await Company.findByPk(req.user.companyId)

    const vacancy = await Vacancy.create({
        name: req.body.name,
        specializationId: req.body.specializationId,
        cityId: req.body.cityId,
        description: req.body.description,
        employmentTypeId: req.body.employmentTypeId,
        salary_from: req.body.salary_from,
        salary_to: req.body.salary_to,
        salary_type: req.body.salary_type,
        address: req.body.address,
        experienceid: req.body.experienceId,
        skills: req.body.skills,
        about_company: req.body.about_company,
        userId: req.user.id,
        companyId: req.user.companyId
    })
    res.status(200).send(end)
}

const getMyVacancies = async (req, res) => {
    const vacancy = await Vacancy.findAll({})
        where: {
            companyId = req.user.companyId
        }
        res.status(200).send(vacancies)
}

const getVacancy = async (req, res) => {
    const vacancy = Vacancy.findByPk(req.params.id, {
        include: [{ model: City, as: "city" }, 
            { model: EmploymentType, as: 'employmentType' },
            { model: Company, as: 'company' },
            { model: Experience, as: 'experience' },
            { model: Specialization, as: 'specialization' },
        ]
    });
    
    if(vacancy)
        res.status(200).send(vacancies)
        else res.status(404).send({message: "Vacancy with id does not found"});
}

const deleteVacancy = async (req, res) => {
    const data = await Vacancy.destroy({
        where: {
            id: req.params.id,
        },
    })
res.status(200).end()
}

const editVacancy = async (req,res) => {
    await Vacancy.update({
        name: req.body.name,
        specializationId: req.body.specializationId,
        cityId: req.body.cityId,
        description: req.body.description,
        employmentTypeId: req.body.employmentTypeId,
        salary_from: req.body.salary_from,
        salary_to: req.body.salary_to,
        salary_type: req.body.salary_type,
        address: req.body.address,
        experienceid: req.body.experienceId,
        skills: req.body.skills,
        about_company: req.body.about_company,
        userId: req.user.id,
        companyId: req.user.companyId
    },
    {
        where: {
            id: req.body.id
        }
    })
    res.atatus(200).end()
}

const searchVacancy = async(req, res) => {
    console.log(req.query);
    // res.status(200).end()
    const options = {}
    const {q, specializationId, cityId, employmantTypeId, salary, salary_type, experienceId} = req.query
    if(q) {
        options.where = {
            [Op.or]: [
                {name: {[Op.iLike]:'%{q}%'}},
                {description: {[Op.iLike]:'%{q}%'}},
                {about_company: {[Op.iLike]:'%{q}%'}},
                {skills: {[Op.iLike]:'%{q}%'}},
            ]
        };
    }
    
    if(specializationId){
        options.specializationId=specializationId;
    }
    if(cityId) {
        options.cityId = cityId;
    }
    if(employmantTypeId){
        options.employmantTypeId = employmantTypeId;
    }
    if(experienceId){
        options.experienceId = experienceId;
    }
    if(salary_type){
        options.salary_type = salary_type;
    }
    if(salary){
        // options.salary_from = ( (Op.lte: salary))
        // options.salary_gte = ( (Op.gte: salary))

        if (salary) {
            options.where = {
                ...options.where,
                salary: {
                    [Op.gte]: salary, // Greater than or equal to the provided salary
                }
            };
        }

    
        // Assuming you have 'salary_from' and 'salary_gte' attributes in your model
        if (salary) {
            options.where = {
                ...options.where,
                salary_from: {
                    [Op.lte]: salary, // Less than or equal to the provided salary
                },
            };
        }
    }

    const vacancies = await Vacancy.findAll({
        where: options
    })
    res.status(200).send(vacancies)
}

module.exports = {
    getExperiences,
    getVacancy,
    getMyVacancies,
    createVacancy, 
    deleteVacancy,
    editVacancy,
    searchVacancy
}