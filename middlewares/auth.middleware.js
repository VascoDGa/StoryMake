import User from './models/user.js';
import JWT from 'jsonwebtoken';
import asyncHandler from '../service/asyncHandler.js';
import '../utils/customErrors.js';
import config from '../config/index.js';

export const isLoggedIn = asyncHandler(async (req, res, next) => {
    let token ; 

    if(req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))) {
        token = req.cookies.token || req.headers.authorization.split(" ")[1];
    }

    if(!token) {
        throw new customErrors("Not authorized", 400);
    }

    try {
        const decodedJwtToken = JWT.verify(token , config.JWT_TOKEN)

        req.user = await User.findById(decodedJwtToken._id , "name email role");

        next();
    } catch (error) {
        throw new customErrors("Not authorized", 400);
    }

    next();
})
