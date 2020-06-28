const studentService = require('./student.service');
const studentController = {};
module.exports = studentController;

/**
 * Create student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.createStudent = async (req, res) => {
    if (!req.body) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = await studentService.createStudent(req.body);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

/**
 * Get all student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.getAllStudent = async (req, res) => {
    let result = await studentService.getStudent();
    if (result) {
        res.status(200).json({ success: true, result: result });
    } else {
        res.status(500).json({ success: false, result: 'some error occured' });
    }
};

/**
 * Get student by Id
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.getStudentById = async (req, res) => {
    if (!req.params._id) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = await studentService.getStudent(req.params._id);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else if (result == null) {
            res.status(200).json({ success: true, result: 'no result found' });
        }
        else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

/**
 * Edit student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.editStudent = async (req, res) => {
    if (!req.body || !req.params._id) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = await studentService.editStudent(req.params._id, req.body);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};

/**
 * Delete student
 * @param {Object} obj - req, res, next obj
 * @return student promise
 */
studentController.deleteStudent = async (req, res) => {
    if (!req.params._id) {
        res.status(404).json({ success: false, result: 'bad request' });
    } else {
        let result = await studentService.deleteStudent(req.params._id);
        if (result) {
            res.status(200).json({ success: true, result: result });
        } else {
            res.status(500).json({ success: false, result: 'some error occured' });
        }
    }
};
