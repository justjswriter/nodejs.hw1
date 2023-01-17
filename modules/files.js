const fs = require('fs');

const getFirstWord = filePath =>{
    const textFromFile = fs.readFileSync(filePath, { encoding: "utf-8" });
    const firstWord = textFromFile.split(' ')[0];
    return firstWord;
}

const getLastWord = filePath =>{
    const textFromFile = fs.readFileSync(filePath, { encoding: "utf-8" });
    const lastWord = textFromFile.split(' ')[textFromFile.split(' ').length - 1];
    return lastWord;
}

module.exports = {
    getFirstWord,
    getLastWord,
}