const mathService = require('./math.service');
const status = require("../constants/status");
const mathController = {};
module.exports = mathController;

/**
 * Addion of two numbers
 * @param {x, y} 
 * @return x + y
 */
mathController.addition = (req, res) => {
    let x = parseFloat(req.params.firstNumber),
        y = parseFloat(req.params.secondNumber);
    if (isNaN(x) || isNaN(y)) {
        return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
    } else {
        let result = mathService.addition(x, y);
        if (result) {
            return res.status(status.ok.code).json({ success: true, result: result });
        } else {
            return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
        }
    }
};

/**
 * Subtraction of two numbers
 * @param {x, y} 
 * @return x - y
 */
mathController.subtraction = (req, res) => {
    let x = parseFloat(req.params.firstNumber),
        y = parseFloat(req.params.secondNumber);
    if (isNaN(x) || isNaN(y)) {
        return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
    } else {
        let result = mathService.subtraction(x, y);
        if (result) {
            return res.status(status.ok.code).json({ success: true, result: result });
        } else {
            return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
        }
    }
};

/**
 * Multiplication of two numbers
 * @param {x, y} 
 * @return x * y
 */
mathController.multiplication = (req, res) => {
    let x = parseFloat(req.params.firstNumber),
        y = parseFloat(req.params.secondNumber);
    if (isNaN(x) || isNaN(y)) {
        return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
    } else {
        let result = mathService.multiplication(x, y);
        if (result) {
            return res.status(status.ok.code).json({ success: true, result: result });
        } else {
            return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
        }
    }
};

/**
 * Division of two numbers
 * @param {x, y} 
 * @return x / y
 */
mathController.division = (req, res) => {
    let x = parseFloat(req.params.firstNumber),
        y = parseFloat(req.params.secondNumber);
    if (isNaN(x) || isNaN(y)) {
        return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
    } else {
        let result = mathService.division(x, y);
        if (result) {
            return res.status(status.ok.code).json({ success: true, result: result });
        } else {
            return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
        }
    }
};

