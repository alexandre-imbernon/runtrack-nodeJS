const fs = require('fs');
const filePath = 'C:\\Users\\Imber\\Documents\\laplateforme projet\\runtracknodeJs\\jour1\\job06\\data.txt';

fs.readFile(filePath, 'utf8', (_, fileContent) => {
    console.log('Contenu du fichier data.txt:\n', fileContent);
});
