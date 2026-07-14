const console = require('console')
const fs = require('fs')
const os = require('os')

// Syn 
// fs.writeFileSync('./test.txt','Hey there') 

// Asyn 
// fs.writeFile('./test.txt' , 'Helo World' , (err) => {})


// Syn 
// const result = fs.readFileSync('./contact.txt' , 'utf-8')
// console.log(result)
// Asyn 

// fs.readFile('./contact.txt' , 'utf-8' , (err , result) =>{
//     if(err)
//         console.log(err)
//     else 
//         console.log(result)
// })


// fs.appendFileSync('./test.txt' ,`\nHy there ${Date.now()}`)

// fs.mkdirSync("Myfile")
// console.log(fs.statSync("./test.txt"))




console.log(os.cpus()[0].model);
console.log(os.cpus().length);