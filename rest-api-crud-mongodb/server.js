const express = require('express');
const db = require('./src/config/mongodb.config');
const routes = require('./src/routes/route');
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

//Setting up server
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));