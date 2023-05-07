const { validationResult } = require("express-validator");
const apiStatus = require("../app/shared/constants/api-status");
const logger = require("../config/logger");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    logger.error(
        `CorrelationId: ${req.correlationId}, error: ${JSON.stringify(
            extractedErrors
        )}`
    );
    return res.status(apiStatus.BAD_REQUEST.status).json({
        errors: extractedErrors,
    });
};

module.exports = validate;
