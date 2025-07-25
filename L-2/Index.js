const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        fs.readFile("Index.html", "utf-8", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
    else if(req.url === "/home") {
        fs.readFile("Home.html", "utf-8", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
});

server.listen(9090, () => {
    console.log("Server is running on port 9090");
});