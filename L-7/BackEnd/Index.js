import express from "express";
import dotenv from "dotenv";
const port = process.env.PORT || 3000;

const app = express();

dotenv.config({
    path: "./.env",
});


app.listen(port, (err) => {
    !err ? console.log(`server start on port ${port}`):console.log("server not started");
})