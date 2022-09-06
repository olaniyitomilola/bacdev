//stream is used to read and write file sequentiallly
//basically used on big files. ut reads large files in chuncks

const { readFile } = require('fs').promises
const {writeFileSync , createReadStream } = require('fs');
const  http  = require('http');
const writethis = () =>{
    for(let i = 0; i<1000000;i++){
        writeFileSync(
            './content/subfolder/bigfile.text',
            'Hello Nigeria my people',
            {flag:'a'}
        )
    } 
}
 

const start = async()=>{
    console.time()
    return await readFile('./content/subfolder/bigfile.text','utf8')
    console.timeEnd();
}
const startstream =  () =>{
    return new Promise((resolve,reject)=>{
        const stream = createReadStream(
            './content/subfolder/bigfile.text',
            {
            //size per chunk
            highWaterMark: 64000}
        )
        //this makes the text a buffer, and cut it into specified size chunks.. 64 in this case
        //if we want to see the normal text, that means we have to pass encoding into the steam, in an object
        //the encoding determines how fast your code is, if its utf8, its just as slow as not using stream
       // 
        
            stream.on('data',(result)=>{
            console.time()
            resolve(result);
            console.timeEnd()
    
        })
        stream.on('error',(error)=>{
            reject(error)
        })
    })
    

}
//writethis()
//this took quite some time when length was over a million
//start()
//startstream()

//function start took an average of 17s
//computer says syaartstream with utf encoding too 24.8ms, lol.. I waited for as long as start and stopwatch says same
//without utf-8, it took 0.409... quuite fast

//instead of sending large file to server, stream chuncked it.
const server = http.createServer()


const startServer = ()=>{
    server.on('request',(req,res)=>{
        start().then((result)=>{
            res.end(result)
        }
    
    
        )
    
    })
    server.listen(3000)
}

const startServerStream = () =>{
    server.on('request',(req,res)=>{
        const stream = createReadStream('./content/subfolder/bigfile.text', {
            encoding: 'utf8'
        })
        stream.on('open',()=>{

            //writ am to the response.. smalll small
            stream.pipe(res);

        })
        stream.on('error',(err)=>{
            res.end(err)
        })
    })
    server.listen(3000)
}

startServerStream();
//startServer();