import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center pt-[100px] space-y-2 text-[25px]'>
        <p className=' text-blue-800'>Login</p>
        <label htmlFor="username" className='text-white'>Username</label>
        <input type="text" placeholder='Enter username' id='username' className='border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black'/>
        <label htmlFor="password" className='text-white'>Password</label>
        <input type="text" placeholder='Enter password' className='mb-[30px] border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black'/>
        <button type='submit' className='text-white rounded-md w-[120px] h-[50px] bg-green-800'>Submit</button>
        <p>Don't have an account? <NavLink to = "/signup" className={({isActive}) => "text-green-800"}>Sign up</NavLink></p>
    </div>
  )
}

export default Login