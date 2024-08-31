module.exports = (req, res) => {
    const { url, method } = req;
    
    const response = { 
        url: url, 
        status: 404, 
        method: method, 
        message: "404 Not Found" 
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response))
}