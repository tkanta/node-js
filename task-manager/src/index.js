const mongoose = require("./db/mongoose")
const express = require('express')
const User = require("./model/user")
const Task = require("./model/task")

const app = new express()
const port = process.env.PORT || 3000
app.use(express.json())

//============ User ==================

app.post("/users", (req, res) => {
    console.log(req.body)
    const user = User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send("user creation error :"+error)
    })
})

app.get("/users", (req, res) => {

    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.get("/user/:email", (req,res) =>{
    
    // const id = req.params.id
    // const ObjId = mongoose.Types.objectId; 
    // const _id = new ObjId(id);
    
    const _email = req.params.email
    
    User.findOne({email: _email}).then((user) =>{

        if(!user){
            return res.status(404).send()
        }

        res.send(user)

    }).catch((err) => {
        res.status(500).send(err)
    })
})
//============== Task =================

app.post("/tasks", (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port , () => {
    console.log("Server is up on port : "+port)
})