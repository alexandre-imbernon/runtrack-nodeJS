const fs = require('fs');
const filePath = 'data.txt';
const newStr = 'Je manipule les fichiers avec un module node !';

fs.writeFile(filePath, newStr, (_) => {
    console.log(newStr);
});