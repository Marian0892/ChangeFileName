const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'images');
console.log(imageDirPath);
// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);
console.log(files);
// Loop through each file that was retrieved
files.forEach(file => rename(
    imageDirPath + `/${file}`,
    imageDirPath + `/${'pic' + Math.floor(Math.random() * 20) +'.jpg'}`,
    err => console.log(err)
));