const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

//SignUp Route

module.exports.Signup = async (req, res) => {
  
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
     console.log(req.body);
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
        httpOnly: true,
  sameSite: "lax",
    });
   res.
   status(201).json({
        success: true ,
        user:{
          userId:user._id,
          username:user.username,
          email:user.email
        }
      })
  } catch (error) {
    console.error(error);
  }
};

//Login Route

module.exports.Login = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
      //  withCredentials: true,
      //  httpOnly: false,
         httpOnly: true,
  sameSite: "lax"
     });
   
     res.status(201).json({
        success: true ,
        user:{
          id:user._id,
          username:user.username,
          email:user.email
        }
      });
  } catch (error){
    console.log(error)
     res.status(500).json({ success: false, message: 'Server error' });
  }
}