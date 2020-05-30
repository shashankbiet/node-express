const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: {
        type:Number,
        required:true
    },
    name: String,
    gender: String,
    createDate:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('student', studentSchema);