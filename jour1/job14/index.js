require('http').createServer((req, res) => {
    const file = { '/': 'index.html', '/about': 'about.html' }[req.url] || 'error.html';
    require('fs').readFile(file, (_, data) => data && res.end(data));
}).listen(8888);