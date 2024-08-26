var http = require('http');

const port = process.env.PORT || 3000 // !ENV

const Server = (req, res) => {
    const { url, method } = req;
    
    let message = "404 Not Found";
    let status = 200;

    switch (true) {
        case url === "/create" && method === "POST":
            message = "Here you will be able to create tasks.";
            break;
        case url === "/read" && method === "GET":
            message = "Here you will be able to retrieve tasks.";
            break;
        case url === "/update" && method === "PUT":
            message = "Here you will be able to modify tasks.";
            break;
        case url === "/delete" && method === "DELETE":
            message = "Here you will be able to delete tasks.";
            break;
        default:
            status = 404;
            break;
    }

    const response = { url: url, status: status, method: method, message: message }

    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response))
}

const server = http.createServer(Server)
server.listen(port, () => console.log(`http://localhost:` + port))