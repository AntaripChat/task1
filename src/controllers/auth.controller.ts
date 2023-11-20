import { Request,Response } from "express"
const signUp = (req:Request,res:Response) =>{
    const Userdata = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    };

    res.send(Userdata);
};


export default {
    signUp
}