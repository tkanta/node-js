const express = require("express")
const Task = require("../model/task")

const router = new express.Router()

router.post("/tasks", (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

module.exports = router