module.exports = (req, res) => {
    const { url, method } = req;
    
    const response = { 
        url: url, 
        status: 200, 
        method: method, 
        message: "Here you will be able to delete tasks." 
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response))
}