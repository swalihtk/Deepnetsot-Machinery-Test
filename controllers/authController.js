const User=require("../model/user");

module.exports={
//@desc : user signup
//@route : /login
//@access : private

    signupHelper:async function(req,res){
        try{
            let {name, email, password, place}=req.body;

            // @desc    validation
            if(name.length<5){
                res.json({error:"Username min 5"});
                return;
            }
            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                res.json({error:"Email not match"});
                return;
            }
            if(password.length<6 ||  password.length>20){
                res.json({error:"Password must be between 6-20"})
                return;
            }

            // checking existing user
            let existingUser=await User.findOne({email:email});

            if(!existingUser){
                let newUser=new User({
                    name,email,password, place
                })
                let saveUser=await newUser.save();
                res.status(200).json(saveUser);
            }else{
                res.json({error:"Email already registerd!!"});
            }
        }catch(e){
            res.json({error:e.message});
        }
    },

//@desc : user signup
//@route : /register
//@access : private
    loginHelper:async function(req,res){
        try{
            let {email, password}=req.body;
            let existingUser=await User.findOne({email:email});

            // @desc    validation
            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                res.json({error:"Email not match"});
                return;
            }
            if(password.length<5 ||  password.length>20){
                res.json({error:"Password must be between 6-20"})
                return;
            }

            if(!existingUser){
                res.json({error:"User not found!!"});
            }else{
                if(existingUser.password===password){
                    res.json({success:true});
                }else{
                    res.json({error:"Password not match!!"});
                }
            }
        }catch(e){
            res.json({error:e.message});
        }
    }
}