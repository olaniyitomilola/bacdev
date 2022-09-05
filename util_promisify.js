const util = require('util')
const { readFile, writeFile} = require('fs')

let readPromised = util.promisify(readFile);
let writePromised = util.promisify(writeFile);

const start = async () =>{
    try {
        let first = await readPromised('./content/first.txt' ,'utf8');
        let second = await readPromised('./content/test.txt' ,'utf8');
        let three =  await readPromised('.//content/subfolder/promisify.text' ,'utf8')

        console.log(first,second,three);
        await writePromised('./content/subfolder/promisify.text',
                        'I am here writing another text inside thuis newly created file ',
                        {flag:'a'}
        )
          
    } catch (error) {
        console.log(error)
    }

}



start();