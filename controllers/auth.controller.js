import asyncHandler from '../service/asyncHandler'
import User from '../models/user.js'
import '../utils/customErrors'

export const cookieOptions = {
    expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly : true
}

export const signUp = asyncHandler(async (req, res) => {
    const { name , email , password } = req.body;

    if(!name || !email || !password) {
        throw new customErrors("Please enter a valid Username and password", 400)
    }

    const existingUser = await User.findOne({email});

    if(existingUser) {
        throw new customErrors("Username already exists", 400)
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
        throw new customErrors("Please enter valid username and password", 400)
    }

    const user = User.findOne({email}).select("+password")

    if(!user) {
        throw new customErrors("Username and password do not match", 400);
    }

    const passwordMatch = await user.comparePassword(password)

    if(passwordMatch){
        const token = user.getJWTtoken();
        user.password = undefined;
        res.cookie ( "token" , token , cookieOptions)
        res.status(200).json({
            success : true,
            token,
            user
        })
    }

    throw new customErrors("Password does not match", 400)
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