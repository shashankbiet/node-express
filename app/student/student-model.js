const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collectionNames = require("../shared/constants/collection-names");

const studentSchema = new Schema(
    {
        name: String,
        gender: String,
        email: {
            type: String,
            required: true,
        },
        mobileNo: Number,
    },
    { versionKey: false }
);

module.exports = mongoose.model(collectionNames.STUDENT, studentSchema);
