const apiStatus = require("../app/shared/constants/api-status");
const ApiError = require("../app/shared/models/api-error");
const logger = require("../config/logger");

let notFoundHandler = async (req, res, next) => {
    const error = new ApiError(
        apiStatus.NOT_FOUND.status,
        apiStatus.NOT_FOUND.message,
        null
    );
    logger.error(
        `CorrelationId: ${req.correlationId}, Method: ${req.method}, Url: ${req.originalUrl},  Message: Url not found`
    );
    return next(error);
};

module.exports = notFoundHandler;
