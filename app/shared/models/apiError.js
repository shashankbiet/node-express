const status = require("../constants/status");

class ApiError {
    constructor(status, msg, stack) {
        this.status = status;
        this.msg = msg;
        this.stack = stack;
    }
    static internalServerError(msg, stack) {
        return new ApiError(status.internalServerError.code, msg, stack);
    }
}

module.exports = ApiError;
