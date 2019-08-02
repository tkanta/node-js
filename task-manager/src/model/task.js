const mongoose = require("mongoose")

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task



// const task = new Task({
//     description: "Learning Azure",
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })