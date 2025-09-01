// multer file upload

const express = require('express');
const multer = require('multer');
const path = require('path');
const { env } = require('process');

const app = express();
const port = env.PORT || 8000;

// storage 

const storage = multer.diskStorage({
    destination:(req, file , cb)=>{
        cb(null , "uploads")
    },
    filename:(req ,file ,cb)=>{
        cb(null , file.originalname)
    }
})


// filter and limits 
const uploadsFilter = multer({
    storage: storage,
    limits : {fileSize:1024 * 1024 * 5},
    fileFilter :(req , file , cb)=>{
        const allowed =["png","jpg","jpeg","gif","pdf","docx","doc","xls"]
        const extname = path.extname(file.originalname).split(".").pop().toLowerCase()
        console.log(`Attempting to upload file: ${file.originalname}`)
        console.log(`Detected extension: ${extname}`)
        console.log(`Allowed extensions: ${allowed.join(', ')}`)
        
        if(allowed.includes(extname)){
            console.log(`File type ${extname} is allowed`)
            cb(null , true)
        }else{
            console.log(`File type ${extname} is NOT allowed`)
            cb(new Error(`File type '${extname}' not allowed. Allowed types: ${allowed.join(', ')}`))
        }
    }

})

// storage 
const memoryStorage = multer.memoryStorage()
const upload = multer({storage})

// route
app.post("/upload" , uploadsFilter.single("file") , (req , res)=>{
    if(req.file){
        console.log(`File uploaded successfully: ${req.file.originalname}`)
        res.send(`File uploaded successfully: ${req.file.originalname}`)
    } else {
        res.status(400).send("No file uploaded")
    }
})

// Error handling middleware for multer errors
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).send('File too large. Maximum size is 5MB.')
        }
    }
    if (error.message.includes('File type')) {
        return res.status(400).send(error.message)
    }
    res.status(500).send('Something went wrong!')
})

app.get('/', (req, res) => {
    res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">Upload</button>
    </form>
    `)
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})