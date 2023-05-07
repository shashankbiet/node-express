const apiStatus = require("../app/shared/constants/api-status");
const ApiError = require("../app/shared/models/api-error");
const logger = require("../config/logger");

let apiErrorHandler = (err, req, res, next) => {
    logger.error(
        `CorrelationId: ${req.correlationId}, err: ${JSON.stringify(err)}`
    );
    let status = apiStatus.INTERNAL_SERVER_ERROR.status,
        message = apiStatus.INTERNAL_SERVER_ERROR.message;
    if (err instanceof ApiError) {
        status = err.status;
        message = err.message;
    }
    return res.status(status).send({
        success: false,
        result: message,
    });
};

module.exports = apiErrorHandler;
