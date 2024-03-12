//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const router = express.Router();
const port = process.env.PORT || 3000;

//add directory data
const studentsData = require('./data/students.json');//??

app.listen(port);
console.log(`Running at Port ${port}`);

//add part of api-path to router
app.use('/api', router);//??
//send data when requesting /api/students
router.get('/students', (req,res) =>{
    res.send(studentsData);
});
//send data when requesting /api/student/<student-ID>
router.get('/student/:id', (req,res) =>{//??
    const id = req.params.id;//??
    console.log(id);//??
    const student = //??
        studentsData.filter(eintrag => eintrag.student_id === parseInt(id));//??
    res.send(student);//??
});//??

// send data when requesting /api/student/lastname/Muster
router.get('/student/lastname/:ln', (req,res) =>{//??
    const lname = req.params.ln;//??
    const student = //??
        studentsData.filter(eintrag => eintrag.lastname === lname);//??
    res.send(student);//??
});//??

// send data when requesting /api/student/betrieb/Beispiel
router.get('/student/betrieb/:name', (req,res) =>{//??
    const company = req.params.name;//??
    const regexp = new RegExp(company, 'i');//??
    const student = //??
        studentsData.filter(eintrag => regexp.test(eintrag.betrieb.firma));//??
    res.send(student);//??
});//??
