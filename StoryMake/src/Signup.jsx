import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendCredentials = await axios.post("http://localhost:5000/api/v1/auth/signup", {username , email, password})
        if(sendCredentials)
            console.log("Data sent to database")
    }


  return (
    <div className='flex flex-col items-center pt-[80px] space-y-2 text-[25px]'>
        <p className=' text-blue-800'>Sign Up</p>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-2 pb-[20px]'>
            <label htmlFor="email" className='text-white'>Email</label>
            <input type="text" placeholder='Enter username' id='email' className='border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black' value = {email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="username" className='text-white'>Username</label>
            <input type="text" placeholder='Enter password' id='username' className='border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black' value = {username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password" className='text-white'>Password</label>
            <input type="password" placeholder='Enter password' id='password' className='border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black' value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='text-white rounded-md w-[120px] h-[50px] bg-green-800 ml-[80px] ' >Submit</button>
        </form>
    </div>
  )
}

export default Signup