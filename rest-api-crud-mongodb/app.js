const express = require('express');
const db = require('./config/mongodb');
const routes = require('./config/route');
require('dotenv').config();

const app = express();

//Database
db();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Routes
routes(app);
module.exports = app;