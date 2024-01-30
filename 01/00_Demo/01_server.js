//Add module express
const express = require('express');
//Important: DO NOT FORGET round braces!
const app = express();
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`server running on port ${port}`);

//GET request
app.get('/api/welcome', (req,res) => {
    res.send('Welcome to Freifach FFIT2!!')
});
app.get('/api/v1/students', (request,response) => {
    response.status(200).send('API not yet implemented!');
});
app.get('/api/v2/students', (req,res) => {
    res.status(200).send(`${req.method} API not yet implemented!`);
});

//POST request
app.post('/api/v2/students', (req,res) => {
    res.status(200).send(`${req.method} API not yet implemented!`);
});
