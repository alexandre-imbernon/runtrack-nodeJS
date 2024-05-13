require('http').createServer((req, res) => {
    const file = { '/': 'index.html', '/about': 'about.html' }[req.url];
    require('fs').readFile(file || '', (_, data) => data && res.end(data));
}).listen(8888);
