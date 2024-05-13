const fs = require('fs');
const filePath = 'C:\\Users\\Imber\\Documents\\laplateforme projet\\runtracknodeJs\\jour1\\job06\\data.txt';
const fileContent = fs.readFileSync(filePath, 'utf8');

console.log('Contenu du fichier data.txt:\n',fileContent);