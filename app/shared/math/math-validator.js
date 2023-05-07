const { param } = require("express-validator");
const mathValidator = {};

const commonValidator = () => {
    return [
        param("firstNumber")
            .notEmpty()
            .isInt()
            .withMessage("Invalid first number"),
        param("secondNumber")
            .notEmpty()
            .isInt()
            .withMessage("Invalid second number"),
    ];
};

mathValidator.addition = commonValidator;

mathValidator.subtraction = commonValidator;

mathValidator.multiplication = commonValidator;

mathValidator.division = () => {
    return [
        param("firstNumber")
            .notEmpty()
            .isInt()
            .withMessage("Invalid first number"),
        param("secondNumber")
            .notEmpty()
            .isInt()
            .withMessage("Invalid second number"),
        param("secondNumber")
            .not()
            .equals("0")
            .withMessage("Second number cannot be zero"),
    ];
};

module.exports = mathValidator;
