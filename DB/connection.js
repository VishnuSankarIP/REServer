require('dotenv').config();
const mongoose=require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(result=>{
    console.log("MongoDB Atlas connected with REserver");
}).catch(err=>{
    console.log("connection failed");
    console.log(err);
})
