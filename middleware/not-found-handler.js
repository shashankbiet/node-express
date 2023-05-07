const apiStatus = require("../app/shared/constants/api-status");
const ApiError = require("../app/shared/models/api-error");

let notFoundHandler = async (req, res, next) => {
    const error = new ApiError(
        apiStatus.NOT_FOUND.status,
        apiStatus.NOT_FOUND.message,
        null
    );
    return next(error);
};

module.exports = notFoundHandler;
