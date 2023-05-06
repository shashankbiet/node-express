const studentService = require('./student.service');
const status = require("../shared/constants/status");
const ApiError = require("../shared/models/apiError");
const logger = require("../../config/logger");
const studentController = {};
module.exports = studentController;

studentController.createStudent = async (req, res, next) => {
    try {
        logger.info(`createStudent req.body: ${JSON.stringify(req.body)}`);
        if (!req.body) {
            return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
        } else {
            let result = await studentService.createStudent(req.body);
            if (result) {
                res.status(status.ok.code).json({ success: true, result: result });
            } else {
                return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
            }
        }
    } catch (err) {
        next(ApiError.internalServerError(err.message, err.stack));
    }
}

studentController.getAllStudent = async (req, res, next) => {
    try {
        logger.info(`getAllStudent req`);
        let result = await studentService.getStudent();
        if (result) {
            res.status(status.ok.code).json({ success: true, result: result });
        } else {
            return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
        }
    } catch (err) {
        next(ApiError.internalServerError(err.message, err.stack));
    }
}

studentController.getStudentById = async (req, res, next) => {
    try {
        logger.info(`getStudentById req.params: ${JSON.stringify(req.params)}`);
        if (!req.params._id) {
            return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
        } else {
            let result = await studentService.getStudent(req.params._id);
            if (result) {
                res.status(status.ok.code).json({ success: true, result: result });
            } else if (result == null) {
                res.status(status.ok.code).json({ success: true, result: 'no result found' });
            }
            else {
                return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
            }
        }
    } catch (err) {
        next(ApiError.internalServerError(err.message, err.stack));
    }
}

studentController.editStudent = async (req, res, next) => {
    try {
        logger.info(`editStudent req.params: ${JSON.stringify(req.params)}`);
        if (!req.body || !req.params._id) {
            return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
        } else {
            let result = await studentService.editStudent(req.params._id, req.body);
            if (result) {
                res.status(status.ok.code).json({ success: true, result: result });
            } else {
                return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
            }
        }
    } catch (err) {
        next(ApiError.internalServerError(err.message, err.stack));
    }
}

studentController.deleteStudent = async (req, res, next) => {
    try {
        logger.info(`deleteStudent req.params: ${JSON.stringify(req.params)}`);
        if (!req.params._id) {
            return res.status(status.notFound.code).json({ success: false, result: status.notFound.message });
        } else {
            let result = await studentService.deleteStudent(req.params._id);
            if (result) {
                res.status(status.ok.code).json({ success: true, result: result });
            } else {
                return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
            }
        }
    } catch (err) {
        next(ApiError.internalServerError(err.message, err.stack));
    }
}
