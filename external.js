const fs = require("fs");
const os = require("os");
const [,  , arg1, arg2] = process.argv;

function sum(num1 ,num2){
    const value=parseInt(num1) + parseInt(num2);
    console.log(`the sum is ${value}`)
}

sum(arg1,arg2);

//read the file

// fs . readFile("./sample.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(`Error occured :${err}`)
//     }else{
//         console.log(data)
//     }
// })

// write the file

// const content = "hey i am written by node js file system"
// fs.writeFile("./newTextFile.txt",content,(err)=>{
//     if(err){
//         console.log(`Error ocuured:${err}`)
//     }else{
//         console.log("file written succefully")
//     }
// })

// edit the file

// const appendContent = `\nHey i was edited by node js append system`
// fs.appendFile("./newTextFile.txt",appendContent,(err)=>{
//     if(err){
//         console.log(`Error ocuured:${err}`)
//     }else{
//         console.log("file written succefully")
//     }
// })

// delete the file

// fs.unlink("./newTextFile.txt",(err)=>{
//     if(err){
//         console.log(`Error ocuured:${err}`)
//     }else{
//         console.log("file deeted succefully")
//     }
// })

////////////////////////////////////////////////////////////////////
// operating system level information

console.log(os.version());
 console.log(os.cpus());
console.log(`total memory ${os.totalmem()}`);
console.log(`free memory :${os.freemem()}`)

//date package

let time =Date.now();
console.log(`Time:`,time)
let date = new Date();
console.log(`Day`,date.getDate());
console.log(`month`,date.getMonth());
console.log(`year`,date.getFullYear());
console.log(`complete date:`,date.toUTCString());
console.log(`complete date:`,date.toUTCString().slice(0,20));
console.log(`complete date:`,date.toUTCString().slice(0,17));
