const http = require('http');
const products = require('./data/products.json');

const server = http.createServer((req, res) => {
    if(req.url === '/api/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products)); 
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 NOT FOUND'); 
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {`Server running on port ${PORT}`});