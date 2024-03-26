/*
School Server
*/
let express = require("express");
const path = require("path");
const fs = require("fs");
let app = express();
const port = process.env.PORT || 3000;

const index = app.listen(port);
console.log(`Running at Port ${port}`);
index.timeout = 1000 * 60 * 2; // 2 minutes

//Allow CORS-Request and set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');//??
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');//??
    res.header('Content-Type', 'application/json');//??
    next();//??
});

//set data path
const staticPath = './data';//??

//add location routes
require("./apis/v1/student-api")(app,staticPath);//??


