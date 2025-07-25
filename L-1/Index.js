const http = require("http");

const server = http.createServer((req, res) => {
        res.end("Hello Welcome to Node.js");
});

server.listen(9090 , () => {
    console.log("Server is running on port 9090");
});