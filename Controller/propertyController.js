const property = require('../Models/propertyModel');
// add property

exports.addProperty=async(req,res)=>{
    console.log("Inside login function");
    console.log(req.payload);
    console.log(req.body);
    console.log(req.files);
    
    const{title,description,address,room,parking,bathroom,price}=req.body
    const userId=req.payload
    // const propertyImage=req.file.filename
    const propertyImage = req.files.map(file => file.filename);
    try{
        const existingProperty = await property.findOne({ title })
        if(existingProperty){
            res.status(406).json("Property already available please insert with another title")
        }
        else{
            const newproperty = new property({
                title,description,address,room,parking,bathroom,price,propertyImage,userId
            })
            await newproperty.save()
            res.status(200).json(newproperty)
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}

// get all property
exports.getAllProperty=async(req,res)=>{
    const searchKey=req.query.search
    const query={
            title:{
                $regex:searchKey,$options:'i'
            }
    }
    try{
        const allProperty=await property.find(query)
        res.status(200).json(allProperty)

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}


// get user property

exports.getUserProperty=async(req,res)=>{
    const userId=req.payload
    try{
        const allProperty=await property.find({userId})
        res.status(200).json(allProperty)

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}

// editproperty
exports.editProperty=async(req,res)=>{
    console.log("Inside edit project");
    const {pid}=req.params
    const userId=req.payload
    const {title,description,address, price}=req.body
   


    try{
        const updatedProperty=await property.findByIdAndUpdate({_id:pid},{title, description, address, price,userId},{new:true})
        await updatedProperty.save()
        res.status(200).json(updatedProperty)

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}
// remove property
exports.removeProperty=async(req,res)=>{
    console.log("Inside remove project");
    const {pid}=req.params
    try{
        const propertyDetails=await property.findByIdAndDelete({_id:pid})
        res.status(200).json(propertyDetails)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}
