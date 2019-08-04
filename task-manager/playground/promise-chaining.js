const mongoose = require("../src/db/mongoose")
const User = require("../src/model/user")

//mongoose.set('useFindAndModify', false);
const filter = {email: "tarininegi@gmail.com"}
const update = {$set:{age:1}}
const option = {new: true} // return updated object

User.findOneAndUpdate(filter, update, option).then((user) =>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result) => {
    console.log("Document count : "+result)
}).catch((err) => {
    return console.log("Error : "+ err)
})

// User.findByIdAndUpdate('5d454751949c3d50d073dd4a', {age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log("Number of documents : "+result)
// }).catch((err) => {
//     console.log("Error : "+ err)
// })

// User.findOne({email: "tarininegi@gmail.com"}).then((user) => {
//     console.log(user)
// }).catch((err) => {
//     console.log(err)
// })