const studentController = require("./student-controller");
const router = require("express").Router();
const studentValidator = require("./student-validator");
const validate = require("../../util/validator");

router.get("/", studentController.get);

router.get(
    "/:_id",
    studentValidator.getById(),
    validate,
    studentController.getById
);

router.post("/", studentValidator.create(), validate, studentController.create);

router.put(
    "/:_id",
    studentValidator.update(),
    validate,
    studentController.update
);

router.delete(
    "/:_id",
    studentValidator.delete(),
    validate,
    studentController.delete
);

module.exports = router;
