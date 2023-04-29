const { param } = require('express-validator')

/**
 * Validation rules for addition, subtraction, multiplication, division
 * @return {Object} - Validation rules.
 */
const validationRules = () => {
    return [
        param('firstNumber').isInt(),
        param('secondNumber').isInt()
    ]
}

module.exports = {
    validationRules
}
