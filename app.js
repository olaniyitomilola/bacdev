const {getId,setId} = require ('./functions')
const file = require('fs');
const name = new Object;
//setId(name,25);
//console.log(getId(name));


//console.log('__dirname: ' +  __dirname)
//console.log('process: '+ process)

//insert into array

var first = [2,1,2,1,3,1,2]

const insertNew = (array,index,value)=>{
    for(i=index;i<=array.length;i++){
        let temps = array[i];
        array[i] = value;
        value = temps;
        array[i+1] = value;
    }
    return array;
}

console.log(insertNew(first,2,10));
/**
 * i= 2 | temps = 2 | first[2] = 10, value = 2, first[3] = 2
 * i=2 | temps = 2 | 
 * 
 */