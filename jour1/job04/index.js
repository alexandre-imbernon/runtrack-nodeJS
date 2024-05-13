const fs = require('fs');
const directoryPath = 'C:\\Users\\Imber\\Documents\\laplateforme projet\\runtracknodeJs\\jour1';

fs.readdir(directoryPath, (_, files) => {
    files.forEach((file) => {
        console.log(file);
    });
});