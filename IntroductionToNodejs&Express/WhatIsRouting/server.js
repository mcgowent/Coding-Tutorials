// Simple example of a route using Express Routing

// This request handler executes when making a GET request to /about

server.get('/about', (req, res) => {
    res.status(200).send('<h1>About us</h1>');
});

// This request handler executes when making a GET request to /contact

server.get('/contact', (req, res) => {
    res.status(200).send('<h1>Contact Form</h1>');
});