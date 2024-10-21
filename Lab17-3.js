const fs = require('fs')
console.log(fs)
console.log(fs.exists);

const fs = require('fs');
fs.stat('JS.txt',(err,data)=>{
    console.log(data)
})

const fs = require('fs');
fs.readFile('JS.txt',(err,data)=>{
    console.log(data.toString())
})

const fs = require('fs');
fs.rename('JS.txt','JS1.txt',(err)=>{
    console.log("File Renamed!")
});
