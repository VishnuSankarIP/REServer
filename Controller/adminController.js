const admin = require("../Models/adminModel");


exports.addComments = async (req, res) => {
    console.log("Inside addComments function");
    console.log(req.payload);
    console.log(req.body);
    
    const { name, email, comments } = req.body;
    const userId = req.payload;
    
    try {
        // Create new property object
        const newComments = new admin({
            name,
            email,
            comments,
            userId
        });
        
        await newComments.save();
        res.status(200).json(newComments);
    } catch (err) {
        res.status(401).json(err);
    }
};

// get comments

exports.getComments=async(req,res)=>{
    try{
        const allComment=await admin.find()
        res.status(200).json(allComment)

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}

// remove comment



exports.removeComment = async (req, res) => {
    const { cid } = req.params;
    try{
        const commentDetails=await admin.findByIdAndDelete({_id:cid})
        res.status(200).json(commentDetails)
    }catch(err)
    {
        res.status(401).json(err)
    }


}