import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import crypto from "crypto";
import config from "../config/index.js";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Username is required"],
        maxLength : [50 , "Username must not exceed 50 characters"]
    },
    password : {
        type : String,
        required : [true, "password is required"],
        minLength : [8 , "password must be at least 8 characters"],
        select : false
    },
    email : {
        type : String,
        required : [true, "email is required"]
    },
    role : {
        type : String,
        enum : Object.values(AuthRoles),
        default : AuthRoles.USER
    },
    forgotPasswordToken : String,
    forgotPasswordExpiry : Date
}, {timestamps: true})

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods = {
    comparePasswords : async function(enteredPassword) {
        return await bcrypt.compare(enteredPassword , this.password);
    },
    getJWTtoken : function() {
        JWT.sign({_id : this._id}, config.JWT_TOKEN, {
            expiresIn : "30d"
        })
    },
    generateForgotPasswordToken: function() {
        const fgpw = crypto.randomBytes.toString("hex");
        this.forgotPasswordToken = crypto.createHash("sha256").update(fgpw).digest("hex");
        this.forgotPasswordExpiry = Date.now() + 20*60*1000;

        return fgpw
    }
}


export default mongoose.model("User", userSchema)