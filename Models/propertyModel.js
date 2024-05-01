const mongoose=require('mongoose')

const propertySchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    parking:{
        type:String,
        required:true
    },
    bathroom:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    propertyImage:{
        type:[String],
        required:true
    },
    userId:{
        type:String,
        required:true
    }

})
const property=mongoose.model("property",propertySchema)
module.exports=property