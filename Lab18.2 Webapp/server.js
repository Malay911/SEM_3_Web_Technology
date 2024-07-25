const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './home.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        // '.gif': 'image/gif',
        // '.wav': 'audio/wav',
        // '.mp4': 'video/mp4',
        // '.woff': 'application/font-woff',
        // '.ttf': 'application/font-ttf',
        // '.eot': 'application/vnd.ms-fontobject',
        // '.otf': 'application/font-otf',
        // '.svg': 'application/image/svg+xml'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', (error, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                res.end();
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
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

const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');

    console.log(req.url);
    
    if(req.url == '/favicon.ico'){
        res.end('');
    }
    else if(req.url == '/home'){
        res.StatusCode = 200;
        res.write('Welcome Home Buddy..');
        res.write('</br>');
        res.write('bye byeeee !!!!!!!!!!!');
        res.end();
    }
    else if(req.url == '/Contact'){
        res.StatusCode = 200;
        res.end('My phone number is : <h2> 93280 #####</h2>');
    }
    else if(req.url == '/About'){
        res.StatusCode = 200;
        res.write('ABOUT US');
        res.write("</br>");
        res.end('This is all it is !!');
    }
    else{
        res.write('Wrong url...');
        res.write('</br>');
        res.write('Try Again');
        res.end();
    }
});

    server.listen(4040,() =>{
        console.log(`Server is running on http://localhost:${port}`);
    });
