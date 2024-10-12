// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using express

const express = require('express');
const app = express();
const fs = require('fs')

app.get('/home', (req, res) => {
    fs.readFile('abc.txt', (err, data) => {
        res.send(data.toString());
    });
});

app.get('/about', (req, res) => {
    fs.readFile('xyz.txt', (err, data) => {
        res.send(data.toString());
    });
});

app.get('/contact', (req, res) => {
    fs.readFile('bcd.txt', (err, data) => {
        res.send(data.toString());
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
