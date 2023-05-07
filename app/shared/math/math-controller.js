const mathService = require("./math-service");
const apiStatus = require("../constants/api-status");
const logger = require("../../../config/logger");
const mathController = {};

mathController.addition = (req, res) => {
    logger.info(
        `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
            req.params
        )}`
    );
    let x = parseInt(req.params.firstNumber),
        y = parseInt(req.params.secondNumber);
    let result = mathService.addition(x, y);
    if (result || result == 0) {
        return res
            .status(apiStatus.OK.status)
            .json({ success: true, result: result });
    } else {
        return res.status(apiStatus.INTERNAL_SERVER_ERROR.status).json({
            success: false,
            result: apiStatus.INTERNAL_SERVER_ERROR.message,
        });
    }
};

mathController.subtraction = (req, res) => {
    logger.info(
        `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
            req.params
        )}`
    );
    let x = parseInt(req.params.firstNumber),
        y = parseInt(req.params.secondNumber);
    let result = mathService.subtraction(x, y);
    if (result || result == 0) {
        return res
            .status(apiStatus.OK.status)
            .json({ success: true, result: result });
    } else {
        return res.status(apiStatus.INTERNAL_SERVER_ERROR.status).json({
            success: false,
            result: apiStatus.INTERNAL_SERVER_ERROR.message,
        });
    }
};

mathController.multiplication = (req, res) => {
    logger.info(
        `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
            req.params
        )}`
    );
    let x = parseInt(req.params.firstNumber),
        y = parseInt(req.params.secondNumber);
    let result = mathService.multiplication(x, y);
    if (result || result == 0) {
        return res
            .status(apiStatus.OK.status)
            .json({ success: true, result: result });
    } else {
        return res.status(apiStatus.INTERNAL_SERVER_ERROR.status).json({
            success: false,
            result: apiStatus.INTERNAL_SERVER_ERROR.message,
        });
    }
};

mathController.division = (req, res) => {
    logger.info(
        `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
            req.params
        )}`
    );
    let x = parseInt(req.params.firstNumber),
        y = parseInt(req.params.secondNumber);
    let result = mathService.division(x, y);
    if (result || result == 0) {
        return res
            .status(apiStatus.OK.status)
            .json({ success: true, result: result });
    } else {
        return res.status(apiStatus.INTERNAL_SERVER_ERROR.status).json({
            success: false,
            result: apiStatus.INTERNAL_SERVER_ERROR.message,
        });
    }
};

module.exports = mathController;
