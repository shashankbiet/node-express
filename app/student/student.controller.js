const studentService = require('./student.service');
const status = require("../shared/constants/status");
const GetApiError = require("../shared/models/GetApiError");
const studentController = {};
module.exports = studentController;

/**
 * Create student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.createStudent = async (req, res, next) => {
    try {
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
        next(GetApiError.internalServerError(err.message, err.stack));
    }
}

/**
 * Get all student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.getAllStudent = async (req, res, next) => {
    try {
        let result = await studentService.getStudent();
        if (result) {
            res.status(status.ok.code).json({ success: true, result: result });
        } else {
            return res.status(status.internalServerError.code).json({ success: false, result: status.internalServerError.message });
        }
    } catch (err) {
        next(GetApiError.internalServerError(err.message, err.stack));
    }
}

/**
 * Get student by Id
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.getStudentById = async (req, res, next) => {
    try {
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
        next(GetApiError.internalServerError(err.message, err.stack));
    }
}

/**
 * Edit student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.editStudent = async (req, res, next) => {
    try {
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
        next(GetApiError.internalServerError(err.message, err.stack));
    }
}

/**
 * Delete student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.deleteStudent = async (req, res, next) => {
    try {
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
        next(GetApiError.internalServerError(err.message, err.stack));
    }
}
