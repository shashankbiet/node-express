const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;
const moment = require('moment');
require("dotenv").config();

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});

function logger() {
    return createLogger({
        level: "info",
        format: combine(
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            errors({ stack: true }),
            logFormat
        ),
        transports: [
            new transports.Console(),
            new transports.File({
                filename: `./bind-mount/logs/${moment().format('YYYY-MM-DD:HHmm')}-combined.log`,
                level: 'info'
            })
        ],
    })
}

module.exports = logger();