const User=require('../Models/User');
const bcrypt = require('bcrypt');

//signUp
exports.SignUp=async(req,res)=>{
    try{
        //fetch data
        const{
            name,
            email,
            password
        }=req.body;

        //validate
        if(!name || !email || !password)
        {
            return res.status(422).json({
                success:false,
                message:"All fields are required"
            })
        }

        //check does user aldready rigistered
        const userDetails=await User.findOne({email});
        if(userDetails)
        {
            return res.status(409).json({
                success:false,
                message:"User is aldready rigistered , do login"
            }) 
        }

        //store in DB
        const hashPas=await bcrypt.hash(password, 10);
        const newUser=await User.create({
            name,
            email,
            password:hashPas
        })

        //return response
        return res.status(200).json({
            success:true,
            message:"User Registered SuccessFully",
            data:newUser
        })
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while Registering a user"
        })
    }
}

// login controller
exports.Login=async(req,res)=>{
    try{
        //fetch data
        const{
            email,
            password
        }=req.body;

        //validate data
        if(!email || !password)
        {
            return res.status(422).json({
                success:false,
                message:"all fields are required"
            })
        }

        //check does user already exist
        const userDetails=await User.findOne({email});
        if(!userDetails)
        {
            return res.status(400).json({
                success:false,
                message:"User is not valid"
            })
        }

        //compare password
        if(await bcrypt.compare(password,userDetails.password))
        {
            return res.status(200).json({
                success:true,
                message:"Valid user"
            })
        }

        return res.status(400).json({
            success:false,
            message:"user is not valid"
        })

    }
    catch(error)
    {
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while validating an user"
        })
    }
}