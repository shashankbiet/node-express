const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: Number,
    name: String,
    gender: String
});

module.exports = mongoose.model('student', studentSchema);