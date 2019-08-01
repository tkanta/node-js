const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name:{
//         type: String
//     },
//     age:{
//         type: String
//     }
// })

// const tarini = new User({
//     name: "Tarini Kanta Negi",
//     age:38
// })

// tarini.save().then(() => {
//     console.log(tarini)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: "Learning Azure",
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})