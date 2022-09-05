//async pattern in NodeJs

const http = require('http')

const server = http.createServer((req,res)=>{
	if(req.url=== '/'){res.end('Home Page')}

	else if(req.url === '/about'){

		//Blocking code(sync cosde that takes too much time)
			for(let i = 0; i<100;i++){
				for(let j = 0; j<5000;j++){
					console.log(`${i} ${j}`)
				}
	
			}
		

		res.end('About Page')
	} else{
		res.end('error page')

	}

})

server.listen(2000,()=>{
	console.log('server is lostening on port 2000')
})

