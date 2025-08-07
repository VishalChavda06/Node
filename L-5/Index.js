import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.urlencoded());

// set view engine to ejs
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// students array to store student data
let Students = [];

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/home", (req, res) => {
  return res.render("home");
});

app.get("/form", (req, res) => {
  return res.render("form", { Students: Students });
});

// ...existing code...

//post request to add student
app.post("/insetStudent", (req, res) => {
  let id = Students.length + 1;
  let name = req.body.name;
  let age = req.body.age;
  let email = req.body.email;

  let student = {
    id: id,
    name: name,
    age: age,
    email: email,
  };
  Students.push(student);
  console.log(Students);
  console.log(" 🟢 Stundet are successfully added..! ");

  return res.redirect("/form");
});

// delete student by id
app.get("/deleteStundet", (req, res) => {
  let studentId = parseInt(req.query.id);
  let newDelete = Students.filter((student) => {
    return student.id !== studentId;
  });
  Students = newDelete;
  console.log(" 🔴 Student deleted successfully!");
  console.log(Students);
  return res.redirect("/form");
});

// Edit Student by id
app.get("/editStudent", (req, res) => {
  let studentEditId = parseInt(req.query.id);
  console.log(studentEditId);
  let editStd = Students.find((student) => student.id === studentEditId);
  if (!editStd) {
    return res.status(404).send("Student not found");
  }
  console.log(" 🟢 Student is ready to edit!" , editStd);
  return res.render("editStudent", { editStd });
});

app.post("/editStudent", (req, res) => {
    let studentId = parseInt(req.body.id);
    console.log(" 🟢 Student ID to be updated: ", studentId);
    Students = Students.map((student) => {
      if (student.id === studentId) {
        student.name = req.body.name;
        student.age = req.body.age;
        student.email = req.body.email;
      }
      return student;
    });
    console.log(" 🟢 Student updated successfully!");
    console.log(Students);
    return res.redirect("/form");
  });
