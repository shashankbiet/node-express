const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentConstant = require('../shared/constants/student');

const studentSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: String,
    gender: String,
    email: {
        type: String,
        required: true
    },
    mobileNo: Number
}, { versionKey: false });

module.exports = mongoose.model(studentConstant.collectionName, studentSchema);