const EventEmitter = require('events');
//there are built in emmiter and the ones you can create yoursef
const customEmit = new EventEmitter();

customEmit.on('request',()=>{
    console.log('request made')
})

customEmit.on('response',()=>{
    console.log('data recieved')
})

customEmit.emit('request')

//the order of listen and emit matters
//you can have many logiuc for same event

//events with http module

const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    if(req==='/'){
        
    }
    res.end('willkommen')
})
server.on('request',(req,res)=>{
    console.log('opened')
})
server.on('response',(req,res)=>{
    console.log('requested made and response sent')
})

server.listen(2134)
