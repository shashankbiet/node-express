const { body, param, validationResult } = require('express-validator')

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

/**
 * Validate the rules defined.
 * @return {Object} - errors if any.
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        success: false,
        errors: extractedErrors,
    });
}

module.exports = {
    validationRules,
    validate,
}
