var http = require('http');
const { pathCheck } = require("./utilities/")

// Connecting to the database
const connection = require("./db/connect")
connection()

// Routes
const { createRoute, readRoute, updateRoute, deleteRoute, noPage } = require("./routes")
const Server = (req, res) => {

    // /create
    if(pathCheck(req, "/create", "POST")) {
        return createRoute(req, res)
    }

    // /read
    if(pathCheck(req, "/read", "GET")) {
        return readRoute(req, res)
    }

    // /update
    if(pathCheck(req, "/update", "PUT")) {
        return updateRoute(req, res)
    }

    // /delete
    if(pathCheck(req, "/delete", "DELETE")) {
        return deleteRoute(req, res)
    }

    // 404
    noPage(req, res)
}

const { PORT } = process.env || 3000 // !ENV
const server = http.createServer(Server)
server.listen(PORT, () => console.log(`http://localhost:${PORT}`))