const mongoose = require("mongoose")
const validator = require("validator")

const User = mongoose.model('User', {
    name:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowerCase:true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('email is invalid')
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be positive number')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password can not contain "password"')
            }
        }
    }
})


module.exports = User