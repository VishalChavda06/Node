import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({
    path: "./.env",
});

app.use(express.urlencoded())

app.set("view engine", "ejs");

const prot = process.env.PORT || 3000;

const StudentData =[]

app.get("/", (req, res) => {
    return res.render('index', {StudentData: StudentData})
})



app.get('/form', (req, res) => {
    return res.render('form', {StudentData: StudentData})
})

app.post('/addstudent', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    let student = {
        name,
        email,
        phone
    }

    StudentData.push(student || [])

    console.log(StudentData )
    return res.render('form', {StudentData: StudentData})
})

app.listen(prot, () => {
    console.log(`Server is running on port ${prot}`)
})



