const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url === '/home') {
        fs.readFile('home.html',(err,data) => {
            res.end(data);
        });
    }
    else if(req.url === '/about') {
        fs.readFile('about.html',(err,data) => {
            res.end(data);
        });
    }
    else if(req.url === '/services') {
        fs.readFile('services.html',(err,data) => {
            res.end(data);
        });
    }
    else if(req.url === '/contact') {
        fs.readFile('contact.html',(err,data) => {
            res.end(data);
        });
    }
    else if(req.url === '/blog') {
        fs.readFile('blog.html',(err,data) => {
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
    }
});
server.listen(4500,()=>{
    console.log('Server is running on port 4500');
});

// const http = require('http');
// const url = require('url');

// const port = 3000;

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     const path = parsedUrl.pathname;

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     if (path === './') {
//         res.write('<h1>Welcome to the Home Page!</h1>');
//     } else if (path === './services.html') {
//         res.write('<h1>This is the About Page!</h1>');
//     } else if (path === './contact.html') {
//         res.write('<h1>These are our Services!</h1>');
//     } else if (path === './about.html') {
//         res.write('<h1>Contact us here!</h1>');
//     } else if (path === './FAQ.html') {
//         res.write('<h1>This is another About Page!</h1>');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('<h1>404 Not Found</h1>');
//     }

//     res.end();
// });

// server.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
