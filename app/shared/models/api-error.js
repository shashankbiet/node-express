const apiStatus = require("../constants/api-status");

class ApiError {
    constructor(status, message, stack) {
        this.status = status;
        this.message = message;
        this.stack = stack;
    }

    static internalServerError(message, stack) {
        message =
            message == undefined
                ? apiStatus.INTERNAL_SERVER_ERROR.message
                : message;
        return new ApiError(
            apiStatus.INTERNAL_SERVER_ERROR.status,
            message,
            stack
        );
    }

    static notFound(message, stack) {
        message = message == undefined ? apiStatus.NOT_FOUND.message : message;
        return new ApiError(apiStatus.NOT_FOUND.status, message, stack);
    }
}

module.exports = ApiError;
