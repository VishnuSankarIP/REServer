const mongoose=require('mongoose')

const CommentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
       
    }
    ,
    comments:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }

})
const admin=mongoose.model("admin",CommentSchema)
module.exports=admin