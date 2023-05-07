const mongoose = require("mongoose");
const logger = require("./logger");
require("dotenv").config();
let dbUrl = process.env.MONGODB_URL;

module.exports = async () => {
    await mongoose
        .connect(dbUrl)
        .then(() => logger.info("MONGODB CONNECTED"))
        .catch((err) => logger.error(JSON.stringify(err)));
};
