const logger = require("../config/logger");

const requestLogging = (req, res, next) => {
    logger.info(
        `CorrelationId: ${req.correlationId}, Method: ${req.method}, URL: ${req.originalUrl}`
    );
    next();
};

module.exports = requestLogging;
