const studentService = require("./student-service");
const apiStatus = require("../shared/constants/api-status");
const ApiError = require("../shared/models/api-error");
const logger = require("../../config/logger");
const studentController = {};

studentController.create = async (req, res, next) => {
    try {
        logger.info(
            `CorrelationId: ${req.correlationId}, req.body: ${JSON.stringify(
                req.body
            )}`
        );
        let result = await studentService.create(req.body);
        if (result) {
            res.status(apiStatus.OK.status).json({
                success: true,
                result: result,
            });
        } else {
            return next(ApiError.internalServerError());
        }
    } catch (err) {
        return next(ApiError.internalServerError(err.message, err.stack));
    }
};

studentController.get = async (req, res, next) => {
    try {
        let result = await studentService.get();
        if (result) {
            res.status(apiStatus.OK.status).json({
                success: true,
                result: result,
            });
        } else {
            return next(ApiError.internalServerError());
        }
    } catch (err) {
        return next(ApiError.internalServerError(err.message, err.stack));
    }
};

studentController.getById = async (req, res, next) => {
    try {
        logger.info(
            `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
                req.params
            )}`
        );
        let result = await studentService.get(req.params._id);
        if (result) {
            res.status(apiStatus.OK.status).json({
                success: true,
                result: result,
            });
        } else if (result == null) {
            return next(ApiError.notFound());
        } else {
            return next(ApiError.internalServerError());
        }
    } catch (err) {
        return next(ApiError.internalServerError(err.message, err.stack));
    }
};

studentController.update = async (req, res, next) => {
    try {
        logger.info(
            `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
                req.params
            )}`
        );
        let result = await studentService.update(req.params._id, req.body);
        if (result) {
            res.status(apiStatus.OK.status).json({
                success: true,
                result: result,
            });
        } else if (result == null) {
            return next(ApiError.notFound());
        } else {
            return next(ApiError.internalServerError());
        }
    } catch (err) {
        return next(ApiError.internalServerError(err.message, err.stack));
    }
};

studentController.delete = async (req, res, next) => {
    try {
        logger.info(
            `CorrelationId: ${req.correlationId}, req.params: ${JSON.stringify(
                req.params
            )}`
        );
        let result = await studentService.delete(req.params._id);
        if (result) {
            res.status(apiStatus.OK.status).json({
                success: true,
                result: result,
            });
        } else if (result == null) {
            return next(ApiError.notFound());
        } else {
            return next(ApiError.internalServerError());
        }
    } catch (err) {
        return next(ApiError.internalServerError(err.message, err.stack));
    }
};

module.exports = studentController;
