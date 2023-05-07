const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, errors } = format;
const moment = require("moment");
const nodeEnv = require("../app/shared/constants/node-env");
require("dotenv").config();

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});

const getTransport = () => {
    let trans;
    switch (process.env.NODE_ENV) {
        case nodeEnv.PROD:
            trans = [
                new transports.Console(),
                new transports.File({
                    filename: `./bind-mount/logs/${moment().format(
                        "YYYY-MM-DD:HHmm"
                    )}-prod.log`,
                    level: "info",
                }),
            ];
            break;
        case nodeEnv.DEV:
            trans = [
                new transports.Console(),
                new transports.File({
                    filename: `./bind-mount/logs/${moment().format(
                        "YYYY-MM-DD:HHmm"
                    )}-dev.log`,
                    level: "info",
                }),
            ];
            break;
        case nodeEnv.TEST:
            trans = [new transports.Console()];
            break;
    }
    return trans;
};

function logger() {
    return createLogger({
        level: "info",
        format: combine(
            timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            errors({ stack: true }),
            logFormat
        ),
        transports: getTransport(),
    });
}

module.exports = logger();
