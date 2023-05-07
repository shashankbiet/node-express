const mathController = require("./math-controller");
const router = require("express").Router();
const mathValidator = require("./math-validator");
const validate = require("../../../util/validator");

router.get(
    "/addition/:firstNumber/:secondNumber/",
    mathValidator.addition(),
    validate,
    mathController.addition
);

router.get(
    "/subtraction/:firstNumber/:secondNumber/",
    mathValidator.subtraction(),
    validate,
    mathController.subtraction
);

router.get(
    "/multiplication/:firstNumber/:secondNumber/",
    mathValidator.multiplication(),
    validate,
    mathController.multiplication
);

router.get(
    "/division/:firstNumber/:secondNumber/",
    mathValidator.division(),
    validate,
    mathController.division
);

module.exports = router;
