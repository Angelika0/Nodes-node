console.log('Starting node.js');
// console.log(module);
// module.exports.age = 24;

 let addNotes = (title, body) => {
    console.log('addNote ', title , body);
    let notes ={
        title,
        body
    };
    
};

// module.exports.add = (a,b) =>  {
//     console.log("dodawnie");
//     return a+b;
// }
module.exports = {
    addNotes: addNotes
}