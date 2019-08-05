const mongoose = require("./db/mongoose")
const express = require('express')
const userRouter = require("./router/user")
const taskRouter = require("./router/task")

const app = new express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port , () => {
    console.log("Server is up on port : "+port)
})