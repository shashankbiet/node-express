const { param } = require('express-validator')

const validationRules = () => {
    return [
        param('firstNumber').isInt(),
        param('secondNumber').isInt()
    ]
}

module.exports = {
    validationRules
}
