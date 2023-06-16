import encrypt from "encryptjs";
import User from '../modals/user.js';

export const checkuser=async(req,res,next)=>{
    try{
        const{_id,password}=req.body;
        if(!_id) return res.send("ID is required in middleware.");
        if(!password) return res.send("Password is required in middleware");
        
        const response=await User.find({_id}).exec();
        if(!response.length) return res.send("user not found in middleware");

        var scretkey="pass"
        var decipherpass=encrypt.decrypt(response[0].password,scretkey,256);

        if(decipherpass==password){
            next();
        }else{
            return res.send("you are not allowed to get data")
        }
    }catch(error){
        return res.send(error);
    }
}