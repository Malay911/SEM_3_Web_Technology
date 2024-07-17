const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("helloworld")
})

const port = 2005;
server.listen(2005,()=>{
    console.log(`is listening ${port}`)
});