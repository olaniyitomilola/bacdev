const file = require('fs');



//readfile

const firstText = file.readFileSync('./content/first.txt','utf8');

console.log(firstText);


//write file
//if the file does nit exist in the location, node will create a new file,
//if it exists, node will overwrite waterver is in there

file.writeFileSync(
    './content/writtenfile.js',
    'const thisObject = new Object;'
    )
//instaed of node to overwrite the file, you can just ask it to append by add a third 
//argumrnt which is an object. {flag: 'a'}
const writeThenRead = (command)=>{
    return new Promise((resolve,reject)=>{
        file.writeFileSync(
            './content/writtenfile.js',
            command,
            {flag: 'a'}
        )
        
        reject();
    })
}
writeThenRead('thisObject.first = 2').then(()=>{
    console.log(file.readFileSync('./content/writtenfile.js','utf8'))
})
