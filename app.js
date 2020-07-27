const http = require('http');

const hostname = '127.0.0.1'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json')
    data = JSON.stringify({
        out: 'Hello World',
    }, null, 2)
    res.end(data)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})