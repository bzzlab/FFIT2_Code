const path = require("path");
const fs = require("fs");
const express = require("express");

module.exports = (app,staticPath) => {//??

    app.get('/welcome', (req, res) => {
        let fileLoc = path.resolve(staticPath+'/welcome.txt');
        fs.readFile(fileLoc, 'utf8',
            (err, text) => {
                res.send(text);
            });
    });

    const router = express.Router();
    //set router for /api/v1
    app.use('/api/v1', router);//??
    let fileLoc = path.resolve(staticPath + '/students.json');//??
    router.get('/students', (req, res) => {
        fs.readFile(fileLoc, 'utf8', (error, text) => {//??
            if (error) {//??
                console.error(`Error ${error}`);//??
            } else {//??
                try {//??
                    const obj = JSON.parse(text);//??
                    res.send(JSON.stringify(obj, null, 4));//??
                } catch (e) {//??
                    console.error('Invalid JSON in file');//??
                }//??
            }//??
        });//??
    });

    router.get('/student/:id', (req, res) => {
        const id = req.params.id;//??
        fs.readFile(fileLoc, 'utf8', (error, text) => {//??
            if (error) {//??
                console.error(`Error ${error}`);//??
            } else {//??
                try {//??
                    const data = JSON.parse(text);//??
                    let out = data.filter(eintrag => eintrag.student_id === parseInt(id));//??
                    res.send(JSON.stringify(out, null, 4));//??
                } catch (e) {//??
                    console.error('Invalid JSON in file');//??
                }//??
            }//??
        });//??
    });
}//??
