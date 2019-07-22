
const yargs = require('yargs')
const notes = require('./notes')

const command = process.argv

//customize yargs command
yargs.version('1.1.0')

//---------- add, remove, list, read ----------

// create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:"note title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe:"please provide your content for the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log('Title : '+ argv.title)
        console.log('Body : '+ argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command:'remove',
    describe: 'remove a new note',
    handler: function() {
        console.log('remove a new note')
    }
})

//  read command
yargs.command({
    command:'read',
    describe: 'read a new note',
    handler: function() {
        console.log('read a new note')
    }
})

//  list command
yargs.command({
    command:'list',
    describe: 'list a new note',
    handler: function() {
        console.log('list a new note')
    }
})

yargs.parse()

// if(command === 'add'){
//     console.log("Adding Note!")
// }else if(command === 'remove'){
//     console.log("remove note")
// }


//---------------- Chalk -------------
// const chalk = require('chalk')

// console.log(chalk.green.bold.inverse('Hi Tarini') + " " + chalk.blue("all good"))
// console.log(chalk.blue.bold('Hello world!'));

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