const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    const method = req.method;

    if (method === 'GET' && path === '/tasks') {
    } else if (method === 'POST' && path === '/tasks') {
    } else if (method === 'PUT' && path.startsWith('/tasks/')) {
        const id = path.split('/')[2];
    } else if (method === 'DELETE' && path.startsWith('/tasks/')) {
        const id = path.split('/')[2];
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

module.exports = server;
