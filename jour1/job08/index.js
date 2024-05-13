const fs = require('fs');
const filePath = 'data.txt';

fs.readFile(filePath, 'utf8', (_, fileContent) => {
    let newStr = '';
    for (let i = 0; i < fileContent.length; i += 2) { 
        newStr += fileContent[i];
    }
    console.log('Un caractère sur deux du fichier data.txt:\n');
    console.log(newStr)
});