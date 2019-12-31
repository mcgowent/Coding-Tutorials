# Introduction to NodeJS & Express
### _These are notes taken for the benifit of myself( Timothy McGowen ) while learning Backend from Lambda School 2019_

-------

> I will be updating this and compiling it into a start to finish style formatting in the hopes that it will make remembering not only easier but be a good reference in the future whenever I come back to these technologies.

## Table of Contents
1. [What is NodeJS?](#What-is-NodeJS?)


# What is NodeJS?
## - Intro to Node.js

### _NodeJS is javascript outside of the browser._


**How are we learning to use it?**  
We will be using JSON ( JavaScript Object Notation) to send infomation back and forth between applications.

**Advantages of using Node?**  
    1. Since you already learned JS in the frontend and now you get to use it in the backend, you get the bonus of using something you've already learned.  
    2. Single Threaded, which basically means you don't have to worry about managing multiple threads of memory.  
    3. Asynchronous: Can take full advantage of the processor its running on. The node process runs on a single CPU.  

**Disadvantages of using Node?**  
    1. Single Threaded, can't take advantage of servers with multiple threads.  
    2. Asynchronous: Can be difficult for non javascript developers to haven't learned how asynchronous programming works.  




**Lets make a super simple web server! - To start things off we need to create a file, so go to your code editor and create an index.js file**

```
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
```
If you type in  
`node index.js`  
in the same folder where you made the file you should see this response  
`server listening on http://127.0.0.1:3000`  
and finally if you go to a browser on your computer and drop in  
`http://127.0.0.1:3000`  
you will see that the server communicates with the browsers and passes along our message!  
`Hello World, from NodeJS`  

>Last Updated 12/30/2019

------- 






















