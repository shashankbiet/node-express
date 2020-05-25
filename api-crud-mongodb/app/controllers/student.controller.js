const studentModel = require('../models/student.model');

module.exports = {
    create: (req, res) => {
        let student = new studentModel({
            id: req.body.id,
            name: req.body.name,
            gender: req.body.gender
        });
        student.save(function (err, result) {
            if (err) return res.status(500).json({ success: false, result: err });
            res.status(200).json({ success: true, result: result })
        })
    },

    fetch: (req, res) => {
        studentModel.find(function (err, result) {
            if (err) return res.status(500).json({ success: false, result: err })
            if (result) return res.status(200).json({ success: true, result: result })
            res.status(404).json({ success: false, result: 'no student found' })
        })
    },

    update: (req, res) => {
        if (!req.body.id) {
            return res.status(400).json({ success: false, result: 'id cannot be null' });
        }
        studentModel.findByIdAndUpdate({ _id: req.params._id }, {
            _id: req.params._id, id: req.body.id, name: req.body.name, gender: req.body.gender
        }, {new: true},  function (err, result) {
            if (err) return res.status(500).json({ success: false, result: err });
            res.status(200).json({ success: true, result: result });
        });
    },

    delete: (req, res) => {
        studentModel.deleteOne({ _id: req.params._id }, function (err, result) {
            if (err) return res.status(500).json({ success: false, result: err });
            if (result) return res.status(200).json({ success: true, result: result });
            res.status(404).json({ success: false, result: 'no such student found' });
        })
    }
}