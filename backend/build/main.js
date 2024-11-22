"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello Server");
});
server.listen(8082, () => {
    console.log("Server is running at port 8082");
});
