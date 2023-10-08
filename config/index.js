import dotenv from 'dotenv';

dotenv.config();

const config = {
    JWT_TOKEN : process.env.JWT_TOKEN || "mysecret",
    MONGODB_URL: process.env.MONGODB_URL || "http://localhost:27017/toryMake",
    api_key : process.env.RAPIDAPI_KEY || "mykey"
}

export default config;