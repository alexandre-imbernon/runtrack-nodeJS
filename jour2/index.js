const server = require('./server');

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});