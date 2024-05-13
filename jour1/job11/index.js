require('http').createServer((_, res) => {
    res.end('Hello World !\n');
}).listen(8888);