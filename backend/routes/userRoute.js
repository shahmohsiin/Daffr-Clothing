import express from 'express'
import {loginUser,registerUser,adminLogin,UserDetail} from '../controllers/userController.js'
import fetchUser from '../middleware/fetchUser.js';

const userRouter= express.Router();


userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.post('/getuser',fetchUser,UserDetail)


export default userRouter