const path = require('path');
const filePath = 'C:\\Users\\Imber\\Documents\\laplateforme projet\\runtracknodeJs\\jour5\\index.js';
const baseName = path.basename(filePath);
const extName = path.extname(filePath);
const repName = path.dirname(filePath)

console.log('Nom du fichier:', baseName);
console.log('Extension:', extName);
console.log('Repertoire', repName)