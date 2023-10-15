import asyncHandler from '../service/asyncHandler.js'
import User from './../models/user.js'

export const cookieOptions = {
    expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly : true
}

export const signUp = asyncHandler(async (req, res) => {
    const { name , email , password } = req.body;

    if(!name || !email || !password) {
        throw new Error("Please enter a valid Username and password")
    }

    const existingUser = await User.findOne({email});

    if(existingUser) {
        throw new Error("Username already exists")
    }

    const user =await User.create({
        name,
        email,
        password
    })

    const token = user.getJWTtoken();

    user.password = undefined;

    res.cookie("token", token , cookieOptions);

    res.status(200).json({
        success:true,
        token,
        user
    })

})

export const logIn = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        throw new Error("Please enter valid username and password")
    }

    const user = await User.findOne({email}).select("+password")

    if(!user) {
        throw new Error("Username and password do not match");
    }

    const passwordMatch = await user.comparePasswords(password)

    if(passwordMatch){
        const token = user.getJWTtoken();
        user.password = undefined;
        res.cookie ( "token" , token , cookieOptions)
        return res.status(200).json({
            success : true,
            token,
            user
        })
    }
    else
        throw new Error("Password does not match")
})

export const logOut = asyncHandler(async (req, res) => {
    res.cookie("token", null , {
        expires : new Date(Date.now()),
        httpOnly : true
    })

    res.send(200).json({
        success: true,
        message : "Logged out successfully"
    })
})

export const getProfile = asyncHandler ( async ( req, res) => {
    const {user} = req;
    if(!user) {
        throw new Error("User not authorized");
    }

    res.status(200).json({
        success: true,
        user
    })
})