const { param, body } = require('express-validator');
const studentConstants = require('../shared/constants/student');

const studentValidationRules = () => {
    return [
        body('id').isInt(),
        body('name').isAlpha(),
        body('gender').isIn(studentConstants.genderTypes),
        body('email').isEmail(),
        body('mobileNo').isLength(10)
    ]
}

const idValidationRules = () => {
    return [
        param('_id').isMongoId()
    ]
}

module.exports = {
    studentValidationRules,
    idValidationRules
}
