const studentController = require('./student.controller');
const router = require('express').Router();

router.get('/', studentController.getAllStudent);
router.get('/:_id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:_id', studentController.editStudent);
router.delete('/:_id', studentController.deleteStudent);

module.exports = router;