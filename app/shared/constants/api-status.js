module.exports = {
    OK: {
        status: 200,
        message: "The request has succeeded.",
    },
    CREATED: {
        status: 201,
        message:
            "The request has succeeded and a new resource has been created.",
    },
    ACCEPTED: {
        status: 202,
        message: "The request has been received but not yet acted upon.",
    },
    BAD_REQUEST: {
        status: 400,
        message:
            "The server could not understand the request due to invalid syntax.",
    },
    UNAUTHORIZED: {
        status: 401,
        message: "The request sent by the client could not be authenticated.",
    },
    FORBIDDEN: {
        status: 403,
        message: "Access to the requested resource is forbidden.",
    },
    NOT_FOUND: {
        status: 404,
        message: "The server can not find the requested resource.",
    },
    INTERNAL_SERVER_ERROR: {
        status: 500,
        message:
            "The server has encountered a situation it doesnt know how to handle.",
    },
    BAD_GATEWAY: {
        status: 502,
        message: "The server was not able to get a valid or any response",
    },
    SERVICE_UNAVAILABLE: {
        status: 503,
        message: "The server is currently unable to handle the request.",
    },
    CONFLICT: {
        status: 409,
        message: "The request conflicts with the current state of the server",
    },
};
