const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    } 
})

const Usermodel =  mongoose.model("Registers",Userschema)
module.exports = Usermodel