const status = require("../app/shared/constants/status");
const ApiError = require("../app/shared/models/apiError");
const logger = require("../config/logger");

let apiErrorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        logger.error({
            msg: err.msg,
            stack: err.stack,
        });
        return res.status(err.status).send();
    }
    logger.error(JSON.stringify(err));
    return res.status(status.internalServerError.code).send();
};

module.exports = apiErrorHandler;
