const { param, body } = require('express-validator');
const studentConstants = require('../shared/constants/student');

/**
 * Validation rules for student object
 * @return {Object} - Validation rules.
 */
const studentValidationRules = () => {
    return [
        body('id').isInt(),
        body('name').isAlpha(),
        body('gender').isIn(studentConstants.genderTypes),
        body('email').isEmail(),
        body('mobileNo').isLength(10)
    ]
}

/**
 * Validation rules for _id
 * @return {Object} - Validation rules.
 */
const idValidationRules = () => {
    return [
        param('_id').isMongoId()
    ]
}

module.exports = {
    studentValidationRules,
    idValidationRules
}
