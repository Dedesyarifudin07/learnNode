// core module
//file system

const fs = require('fs');


//menuliskan  string ke file secara (synchronus)
// try{
//     fs.writeFileSync('data/test.txt','hello deteok secara synchronus!');
// }catch(err){
//     console.log(err)
// }

//menuliskan  string ke file secara (assynchronus)
fs.writeFile('data/text.txt','Hello world secara asynchronus',(e) =>{
    console.log(e)
})