const mathService = require('./math.service');
const mathController = {};
module.exports = mathController;

/**
 * Addion of two numbers
 * @param {x, y} 
 * @return x + y
 */
mathController.addition = (req, res) => {
    let x = parseFloat(req.params.x),
        y = parseFloat(req.params.y);
    if (isNaN(x) || isNaN(y)) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = mathService.addition(x, y);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

/**
 * Subtraction of two numbers
 * @param {x, y} 
 * @return x - y
 */
mathController.subtraction = (req, res) => {
    let x = parseFloat(req.params.x),
        y = parseFloat(req.params.y);
    if (isNaN(x) || isNaN(y)) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = mathService.subtraction(x, y);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

/**
 * Multiplication of two numbers
 * @param {x, y} 
 * @return x * y
 */
mathController.multiplication = (req, res) => {
    let x = parseFloat(req.params.x),
        y = parseFloat(req.params.y);
    if (isNaN(x) || isNaN(y)) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = mathService.multiplication(x, y);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

/**
 * Division of two numbers
 * @param {x, y} 
 * @return x / y
 */
mathController.division = (req, res) => {
    let x = parseFloat(req.params.x),
        y = parseFloat(req.params.y);
    if (isNaN(x) || isNaN(y)) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = mathService.division(x, y);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

