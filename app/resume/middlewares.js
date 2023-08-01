const Resume = require('./models/Resume')
const validateResume = (req,res)=> {
    let errors = {};

    if(!req.body.first_name || req.body.first_name.length === 0)
        errors.first_name = "Поля Имя обязательное"

    if(!req.body.last_name || req.body.last_name.length === 0)
        errors.last_name = "Поля Фамилие обязательное"

    if(!req.body.phone || req.body.phone.length === 0)
        errors.phone = "Поля Телефон обязательное"

    if(!req.body.position || req.body.position.length === 0)
        errors.position = "Поля Желаемая должность обязательное"

    if(!req.body.about || req.body.about.length === 0)
        errors.about = "Поля О себе обязательное"

    if(JSON.sytringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfResume = async (req, res, next) => {
    const id = req.params.id || req.body.id;

    const resume = await Resume.findByPk(id)
    if(!resume) res.status(400).send({message: "Resume with id does not exist"});
    // if(resume && req.user.id === resume.userId) next():
    else if(req.user.id === resume.userId) next();
    else res.status(403).send({message: "Access Forbiden"});
}

module.exports = {
    validateResume,
    isAuthorOfResume
}

