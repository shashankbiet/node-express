const mathController = require('./math.controller');
const router = require('express').Router();

router.get('/addition/:x/:y/', mathController.addition);
router.get('/subtraction/:x/:y/', mathController.subtraction);
router.get('/multiplication/:x/:y/', mathController.multiplication);
router.get('/division/:x/:y/', mathController.division);

module.exports = router;