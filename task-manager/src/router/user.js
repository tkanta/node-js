const express = require("express")
const User = require("../model/user")

const router = new express.Router()

router.post("/users",  async (req, res) => {
    console.log(req.body)
    const user = User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send("user creation error :"+error)
    }
    
})

router.get("/users", (req, res) => {

    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

router.get("/user/:email", async (req,res) =>{
    
    // const id = req.params.id
    // const ObjId = mongoose.Types.objectId; 
    // const _id = new ObjId(id);
    
    const _email = req.params.email
    console.log(_email)
    try{
        const user = await User.findOne({email: _email})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
   
})

module.exports = router