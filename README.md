# 'CSI205': FRONT END SOFTWARE DEVELOPMENT

This is a sample learning tool for the CSI 205 course.

[Git Repository Link:] (https://github.com/ThinnaphatCSI/CSI205)

Git is the free and open source distributed version control system that's responsible for everything GitHub related that happens locally on your computer.

[Download Node.js Link:] (https://nodejs.org/en/download)

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.

# 'Example:' Creating a Simple Server

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
