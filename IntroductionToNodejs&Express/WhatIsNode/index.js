// This is the inside of your index.js file

// What is a server? 
// A place that can grab communication from somewhere else

const http = require('http'); // This is the same as importing with the new syntax

const hostname = '127.0.0.1'; // A place where the server will run
const port = 3000; // port on the computer where it will run

const server = http.createServer((req, res) => {    // req stands for the request being made, and res is the response you get from the server
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    res.end('Hello World, from NodeJS');
});

server.listen(port, hostname, () => {
    console.log(`server listening on http://${hostname}:${port}`);
});