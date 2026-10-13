import user from '../models/user.js';

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const extEmail=await user.findOne({email});
        if(extEmail){
            return res.json({message:"Email already used"})
        }
        const client=await user.create({
            name,
            email,
            password
        })
        return res.json({message:"User Register successfully"});
    }
    catch{
        return res.json({message:"Error in Registration"})
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const extUser=await user.findOne({email});
        if(!extUser){
            return res.json({message:"User not Registered"})
        }
        if(password!==extUser.password){
            return res.json({message:"Password not Matched"})
        }
        return res.json({message:"Login Successfully",
            user:extUser
        })
    }
    catch{
        return res.json({message:"Error in Login"})
    }
}