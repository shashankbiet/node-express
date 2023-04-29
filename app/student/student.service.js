const studentModel = require('./student.model');
const studentService = {};
module.exports = studentService;

studentService.createStudent = (body) => {
        return new Promise((resolve, reject) => {
                let student = new studentModel(body);
                student.save((err, result) => {
                        if (err) reject(err);
                        resolve(result);
                })
        })
};

studentService.getStudent = (id) => {
        return new Promise((resolve, reject) => {
                if (id) {
                        studentModel.findById(id, (err, result) => {
                                if (err) reject(err);
                                resolve(result);
                        })
                } else {
                        studentModel.find((err, result) => {
                                if (err) reject(err);
                                resolve(result);
                        })
                }
        })
};

studentService.editStudent = (id, body) => {
        return new Promise((resolve, reject) => {
                body._id = id;
                let student = new studentModel(body);
                studentModel.findByIdAndUpdate(id, student, { new: true }, (err, result) => {
                        if (err) reject(err);
                        resolve(result);
                })
        })
};

studentService.deleteStudent = (id) => {
        return new Promise((resolve, reject) => {
                studentModel.findByIdAndDelete(id, (err, result) => {
                        if (err) reject(err);
                        resolve(result);
                })
        })
};
