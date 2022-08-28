const filing = require('fs');
const operating = require('os')



//user info
//console.log(operating.userInfo())

//hostname
//console.log(operating.hostname())

//return system runtime in seconds

//console.log(operating.uptime())
//in minutes

//console.log(operating.uptime()/(60*60*24) + ' days')

//set up os info object

const mySystemOs = {
    name : operating.type(),
    release: operating.release(),
    totalmem: operating.totalmem(),
    freeMem: operating.freemem(),
    what: operating.version()
}

console.log(mySystemOs);