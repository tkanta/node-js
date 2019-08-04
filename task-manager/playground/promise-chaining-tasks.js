const mongoose = require("../src/db/mongoose")
const Task = require("../src/model/task")

Task.findOneAndDelete({description:"task creation"}).then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((count) => {
    console.log("count :"+count)
}).catch((err) => {
    console.log(err)
})