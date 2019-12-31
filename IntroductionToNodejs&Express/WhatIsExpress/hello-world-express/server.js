const express = require('express'); // You've imported express

const port = 3000; // You've set the port for the server

const server = express(); // Here you are saving all of the express magic to a variable called server

server.get('/', (req, res) => {
    res.send('Hello world from Express!');
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});