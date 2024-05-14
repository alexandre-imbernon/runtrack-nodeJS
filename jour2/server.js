const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    const method = req.method;

    if (method === 'GET' && path === '/tasks') {
        // Votre code existant
    } else if (method === 'POST' && path === '/tasks') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newTask = JSON.parse(body);
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Erreur de lecture du fichier');
                } else {
                    const tasks = JSON.parse(data).tasks;
                    tasks.push(newTask);
                    fs.writeFile('data.json', JSON.stringify({ tasks }), err => {
                        if (err) {
                            res.statusCode = 500;
                            res.end('Erreur d\'écriture dans le fichier');
                        } else {
                            res.statusCode = 201;
                            res.end('Tâche créée avec succès');
                        }
                    });
                }
            });
        });
    } else if (method === 'PUT' && path.startsWith('/tasks/')) {
        const id = path.split('/')[2];
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newTask = JSON.parse(body);
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Erreur de lecture du fichier');
                } else {
                    const tasks = JSON.parse(data).tasks;
                    const index = tasks.findIndex(task => task.id == id);
                    if (index !== -1) {
                        tasks[index] = newTask;
                        fs.writeFile('data.json', JSON.stringify({ tasks }), err => {
                            if (err) {
                                res.statusCode = 500;
                                res.end('Erreur d\'écriture dans le fichier');
                            } else {
                                res.statusCode = 200;
                                res.end('Tâche mise à jour avec succès');
                            }
                        });
                    } else {
                        res.statusCode = 404;
                        res.end('Tâche non trouvée');
                    }
                }
            });
        });
    } else if (method === 'DELETE' && path.startsWith('/tasks/')) {
        const id = path.split('/')[2];
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Erreur de lecture du fichier');
            } else {
                const tasks = JSON.parse(data).tasks;
                const index = tasks.findIndex(task => task.id == id);
                if (index !== -1) {
                    tasks.splice(index, 1);
                    fs.writeFile('data.json', JSON.stringify({ tasks }), err => {
                        if (err) {
                            res.statusCode = 500;
                            res.end('Erreur d\'écriture dans le fichier');
                        } else {
                            res.statusCode = 200;
                            res.end('Tâche supprimée avec succès');
                        }
                    });
                } else {
                    res.statusCode = 404;
                    res.end('Tâche non trouvée');
                }
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Non trouvé');
    }
});

module.exports = server;
