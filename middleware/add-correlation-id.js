const uuid = require("uuid");

const addCorrelationId = (req, res, next) => {
    req.correlationId = uuid.v4();
    next();
};

module.exports = addCorrelationId;
