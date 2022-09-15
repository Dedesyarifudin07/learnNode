const fs = require('fs');

//======================================= READLINE =============================================
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('siapa nama anda', (nama) => {
    rl.question('masukan nomer hp:', (hp) => {
        //=============================== MENYIAPKAN OBJECT =====================================
        const  Contact = {nama,hp};
        //=============================== BACA FILESYSTEM =======================================
       const file = fs.readFileSync('data/Contact.json','utf-8')
       //================================ UBAH STRING KE JSON ===================================
        const Contacts = JSON.parse(file);


        Contacts.push(Contact);

        console.log(Contact);

        //============================== UBAH  JSON KE STRING ======================================
        fs.writeFileSync('data/Contact.json',JSON.stringify(Contacts));

        console.log('terima kasih sudah memasukan data');

        rl.close();
    });
  });


//ketika menuliskan write file 
//masukan ke contaxt.json

