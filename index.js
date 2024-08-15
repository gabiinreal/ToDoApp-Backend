var http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello world!")
})

const port = process.env.PORT || 3000 // !ENV
server.listen(port, () => console.log(`http://localhost:` + port))