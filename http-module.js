const http = require('http');

//the origin of server side

const server = http.createServer((req,res)=>{


    if(req.url === '/'){
        res.end('here is the homepage')
        
    } 
    if(req.url === '/about')  {
        res.end('here is the about page')
        
    } 

    res.end('wetin gan naw')
})

server.listen(5000);

//some fucking error here.. Qill check later