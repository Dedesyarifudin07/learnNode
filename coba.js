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
// fs.writeFile('data/text.txt','Hello world secara asynchronus',(e) =>{
//     console.log(e)
// })

//membaca isi file synchronus
// const data = fs.readFileSync('data/test.txt','utf-8');
// console.log(data);

//membaca file asynchronus
// fs .readFile('data/test.txt','utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })


//readline

const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('siapa nama anda', (nama) => {
    rl.question('masukan nomer hp:', (hp) => {
        //==================================== MENYIAPKAN OBJECT ==================================
        const  Contact = {nama,hp};
       const file = fs.readFileSync('data/Contact.json','utf-8')
       // ==================================== UBAH STRING KE JSON =================================
        const Contacts = JSON.parse(file);


        Contacts.push(Contact);

        console.log(Contact);

        // =============================== UBAH JSON KE STRING ====================================
        fs.writeFileSync('data/Contact.json',JSON.stringify(Contacts));

        console.log('terima kasih sudah memasukan data');

        rl.close();
    });
  });


//ketika menuliskan write file 
//masukan ke contaxt.json


