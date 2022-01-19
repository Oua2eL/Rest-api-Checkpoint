const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    age:Number,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        unique:true
    }
})

const model = mongoose.model('user', userSchema)
module.exports=model
