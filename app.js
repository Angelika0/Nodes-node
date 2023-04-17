console.log("Staring app.js")
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
var user = os.userInfo();
//   const _ = require('lodash');
let command = process.argv[2];
console.log("komenda  ", command);
console.log(process.argv);
if (command === 'add'){
    console.log("dodawanie nowej notatki ");
    
}
else if(command === 'list'){
    console.log("listowanie notatek ")
}
else if(command === 'read'){
    console.log("odzcyt notatki ");
}
else if(command==='remove'){
    console.log("kasowanie notatki");

}
else{
    console.log("nierozpoznanie komenda");
}
// let wynik = notes.add(2,2);
// console.log(wynik);
// fs.appendFile('powitanie.txt','hello JS!');
// fs.appendFileSync('powitanie.txt','hello JS!'+ user.username + '!');
// fs.appendFileSync('powitani2.txt', `witaj ${user.username} !Masz ${notes.age}.`);


// fs.appendFile('powitanie.txt','hello JS!' , function (err)=>{
//     if(err){console.log("problem z otwarciem pliku")}
// });

// console.log(user);
// console.log("startowa aplikacja")
