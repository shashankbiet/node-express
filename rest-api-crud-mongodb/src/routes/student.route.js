const studentController = require('../controllers/student.controller');
const router = require('express').Router();

router.get('/', studentController.fetch);
router.post('/', studentController.create);

router.put('/:_id/', studentController.update);
router.delete('/:_id/', studentController.delete);

module.exports = router;