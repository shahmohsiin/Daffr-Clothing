import jwt from 'jsonwebtoken';
import Users from '../models/userSchema.js';


// Route for user to login

const loginUser = async(req,res)=>{

    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, errors: "wrong password" })
        }
    }
    else {
        res.json({ success: false, errors: "Maybe Your're not Registered Or Your Email is wrong" })
    }


}
// Route for user to Register
const registerUser = async(req,res)=>{
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "existing user found with the same email address" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0

    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
   

}

//route for admin login

const adminLogin = async(req,res) =>{
try {
    const{email,password}= req.body
if (email ===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
  const token = jwt.sign(email+password,process.env.JWT_SECRET);
  res.json({success:true,token})
}
else{
    res.json({success:false,message:"Invalid Credentials"})
}
} catch (error) {

    console.log(error);
    res.json({success:false,message:error.message})
    
}

}

const UserDetail = async(req,res)=>{
    console.log("GetUser")
    let userData = await Users.findOne({ _id: req.user.id })
    res.json({
        name: userData.name,
        email: userData.email
    });


    
    
}




export {loginUser,registerUser,adminLogin,UserDetail}