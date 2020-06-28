const studentController = require('./student.controller');
const router = require('express').Router();
const { studentValidationRules, idValidationRules } = require('../student/student.validator');
const validate = require('../../Util/validator');

router.get(
    '/',
    studentController.getAllStudent
);

router.get(
    '/:_id',
    idValidationRules(),
    validate,
    studentController.getStudentById
);

router.post(
    '/',
    studentValidationRules(),
    validate,
    studentController.createStudent
);

router.put(
    '/:_id',
    idValidationRules(),
    studentValidationRules(),
    validate,
    studentController.editStudent
);

router.delete(
    '/:_id',
    idValidationRules(),
    validate,
    studentController.deleteStudent
);

module.exports = router;