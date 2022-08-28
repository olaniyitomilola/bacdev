const getId = (db) =>{
    return db.id;
}
const setId = (db,mid) =>{
     db.id = mid;
}


module.exports = { getId,setId };