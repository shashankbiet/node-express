const status = require("../app/shared/constants/status");
const ApiError = require("../app/shared/models/apiError");

let notFoundHandler = async (req, res, next) => {
    const error = new ApiError(
        status.notFound.code,
        status.notFound.message,
        null
    );
    next(error);
};

module.exports = notFoundHandler;
