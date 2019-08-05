const mongoose = require("../src/db/mongoose")
const Task = require("../src/model/task")

const addTaskAndCount = async (addTask) => {
   const task = new Task(addTask)
   const newTask = await task.save()
   const count = await Task.countDocuments({completed:false}) 
   return count
}

const addTask = {
    description: "AWS completed",
    completed: false
}
addTaskAndCount(addTask).then((result) => {
    return console.log("result", result)
}).catch((err) => {
    return console.log("Task Error :", err)
})