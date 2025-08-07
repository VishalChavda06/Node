import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config({
  path: './.env'
});

app.use(express.urlencoded());

// set view engine to ejs
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// students array to store student data
let Students = []

app.get('/' , (req , res)=>{
    return res.render('index')
})

app.get('/home' , (req , res)=>{
    return res.render('home')
})

app.get('/form' , (req , res)=>{
    return res.render('form', { Students: Students })
})

//post request to add student
app.post('/insetStudent', (req, res) => {
    let id = Students.length + 1;
    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;

    let student = {
        id: id,
        name: name,
        age: age,
        email: email
    };
    Students.push(student);

    console.log(" 🟢 Stundet are successfully added..! ", Students);
     return res.redirect('/form')
})

