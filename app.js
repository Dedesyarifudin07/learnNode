const fs = require('fs');

//readline

const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('siapa nama anda', (nama) => {
    rl.question('masukan nomer hp:', (hp) => {
        //meyiapkan object
        const  Contact = {nama,hp};
        //baca filesystem
       const file = fs.readFileSync('data/Contact.json','utf-8')
       //ubah string ke json
        const Contacts = JSON.parse(file);


        Contacts.push(Contact);

        console.log(Contact);

        //ubah json ke string
        fs.writeFileSync('data/Contact.json',JSON.stringify(Contacts));

        console.log('terima kasih sudah memasukan data');

        rl.close();
    });
  });


//ketika menuliskan write file 
//masukan ke contaxt.json

