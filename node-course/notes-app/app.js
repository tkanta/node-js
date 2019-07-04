
const chalk = require('chalk')

console.log(chalk.green.bold.inverse('Hi Tarini') + " " + chalk.blue("all good"))
console.log(chalk.blue.bold('Hello world!'));

console.log(process.argv[2])
//------------ validator -------------
// const validator = require('validator')

// console.log(validator.isEmail('tarini@gmail.com'))
// console.log(validator.isURL('http://tarinigmail.com'))

//--------- importing module ------------
// const getNotes = require("./notes")
// console.log(getNotes())

// const add = require("./utils")
// console.log("sum = "+add(7,4))
//const fs = require('fs')
//fs.writeFileSync("notes.txt", "This note is created by Tarini!")
//fs.appendFileSync("notes.txt", "My name is Tarini")