import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res) =>{
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        await newUser.save();
        res.status(201).json('user created successfully');


    }catch(error){
        res.status(500).json(error.message);
    }
    const newUser = new User({username, email, password: hashedPassword});
    await newUser.save()
    res.status(201).json({message: "User Created Successfully"});
}