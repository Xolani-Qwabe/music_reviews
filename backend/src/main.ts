import { ClientHttp2Session } from "http2";

let http = require('http');

const server = http.createServer((req:any, res:any) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello Server")
});


server.listen(8082, ()=>{
    console.log("Server is running at port 8082")
})