const Vacancy = require('./models/Vacancy')

const validateVacancy = (req, res, next) => {
    let errors = {};

    if(!req.body.name || req.body.name.length === 0)
        errors.name = "Поле Название вакансии обязательное"

    if(!req.body.specialization_id || typeof req.body.specialization_id !== 'number')
        errors.specialization_id = "Поле специализация обязательное"

    if(!req.body.city_id || typeof req.body.city_id !== 'number')
        errors.city_id = "Поле Где искать сотрудников обязательное"

    if(!req.body.description || req.body.description.length === 0)
        errors.description = "Поле Расскажите про вакансию обязательное"

    if(!req.body.employment_type_id || typeof employment_type_id !== 'number')
        errors.employment_type_id = "Поле Тип занятости обязательное"

    if(JSON.sytringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfVacancy = async(req, res, next) => {
    const id = req.params.id || req.body.id;
    const vacancy = await Vacancy.findByPk(id)
    if(!vacancy) res.status(400).send({message: "Vacancy with id does not exist"});
    else if(vacancy.userId = req.user.id){
        next()
    } else {
        res.status(403).send({message: "Access forbiden"})
    }

}

module.exports = {
    validateVacancy,
    isAuthorOfVacancy
}