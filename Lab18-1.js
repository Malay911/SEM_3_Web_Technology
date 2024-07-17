const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello World")
})

const port = 3000;
server.listen(3000,()=>{
    console.log("Server started at 3000")
});
