const mathController = require('./math.controller');
const router = require('express').Router();
const { validationRules } = require('./math.validator');
const validate = require('./../../../Util/validator');

router.get(
    '/addition/:firstNumber/:secondNumber/',
    validationRules(),
    validate,
    mathController.addition
);

router.get(
    '/subtraction/:firstNumber/:secondNumber/',
    validationRules(),
    validate,
    mathController.subtraction
);

router.get(
    '/multiplication/:firstNumber/:secondNumber/',
    validationRules(),
    validate,
    mathController.multiplication
);

router.get(
    '/division/:firstNumber/:secondNumber/',
    validationRules(),
    validate,
    mathController.division
);

module.exports = router;