const express = require("express");
const mongodb = require("./config/mongodb");
const router = require("./config/router");
const apiErrorHandler = require("./middleware/api-error-handler");
const notFoundHandler = require("./middleware/not-found-handler");
const addCorrelationId = require("./middleware/add-correlation-id");
const requestLogging = require("./middleware/request-logging");
require("dotenv").config();

const app = express();

//Database
mongodb();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    //Remove headers
    res.removeHeader("X-Powered-By");

    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, HEAD, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, ContentType, Content-Type, Accept, Authorization"
    );
    res.header(
        "Strict-Transport-Security",
        "max-age=15552000; includeSubDomains; preload;"
    );
    res.header("X-Frame-Options", "DENY");
    res.header("X-XSS-Protection", "1; mode=block");
    res.header("X-Content-Type-Options", "nosniff");
    res.header(
        "Content-Security-Policy",
        "default-src 'none'; script-src 'self'; style-src 'self'; object-src 'none'"
    );
    res.header("Referrer-Policy", "same-origin");
    next();
});

//Add Correlation Id
app.use(addCorrelationId);

//Request Logging
app.use(requestLogging);

//Routes
router(app);

//Error Handling
app.use(apiErrorHandler);

//Not Found
app.use(notFoundHandler);

module.exports = app;
