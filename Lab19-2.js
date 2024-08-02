const express = require('express');
const app=express();
const isValid=false;
app.get('/home',(req,res)=>{
    res.send('Welcome Home');
});
app.get('/contact',(req,res)=>{
    res.send('Welcome TO Contact');
});
app.get('/about',(req,res)=>{
    res.send('Welcome about');
});
app.get('/FAQ',(req,res)=>{
    res.send('FAQ');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});