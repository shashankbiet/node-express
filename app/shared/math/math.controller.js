const mathService = require('./math.service');
const status = require("../constants/status");
const logger = require("../../../config/logger");
const mathController = {};
module.exports = mathController;

mathController.addition = (req, res) => {
    logger.info(`addition req.params: ${JSON.stringify(req.params)}`);
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

mathController.subtraction = (req, res) => {
    logger.info(`subtraction req.params: ${JSON.stringify(req.params)}`);
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

mathController.multiplication = (req, res) => {
    logger.info(`multiplication req.params: ${JSON.stringify(req.params)}`);
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

mathController.division = (req, res) => {
    logger.info(`division req.params: ${JSON.stringify(req.params)}`);
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

