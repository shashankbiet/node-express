const { param, body } = require("express-validator");
const genderTypes = require("../shared/constants/gender-types");
const studentValidator = {};

const idValidator = () => {
    return [param("_id").isMongoId()];
};

const bodyValidator = () => {
    return [
        body("name").notEmpty().withMessage("Empty name"),
        body("gender")
            .notEmpty()
            .withMessage("Empty gender")
            .isIn(Object.values(genderTypes))
            .withMessage("Invalid gender"),
        body("email").isEmail().withMessage("Invalid email address"),
        body("mobileNo")
            .isInt()
            .isLength({ max: 10, min: 10 })
            .withMessage("Phone number must be 10 digits long"),
    ];
};

studentValidator.getById = idValidator;

studentValidator.create = bodyValidator;

studentValidator.update = bodyValidator;

studentValidator.delete = idValidator;

module.exports = studentValidator;
