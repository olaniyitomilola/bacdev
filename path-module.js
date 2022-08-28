const path = require('path');
//check file path
const filepath = path.resolve();

//create new file path
const newPath = path.join(filepath,'newfolder', 'newfile.js');

console.log(newPath);

//checkbase name

const bases = {
    1 : path.basename(filepath),
    2: path.basename(newPath),
    3: path.basename(__dirname),
    4: path.basename(__filename)
}

console.log(bases);