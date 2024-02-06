const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    let op = JSON.stringify(request.headers)
    response.end("Backend headers: " + op);
    // res.render('index', { title: op })
    
    // response.end("Hello from the backend web app!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
