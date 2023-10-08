import React from 'react'
import { Link , NavLink, Outlet} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='bg-gray-700 flex h-[60px] w-[100%] ' style={{ justifyContent: 'space-between'}}>
       <p className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent  text-[35px] pl-[20px]' style={{ fontFamily: "Cursive" }}> StoryMake </p>
       <ol className='flex space-x-0 pr-[20px] text-[20px] bg-gray-700 pt-[10px]'>
        <li><NavLink to = "/" className={({ isActive }) => `px-5 py-5 ${isActive ? "bg-green-800" : "hover:bg-green-800"} cursor-pointer pt-[10px]`}>Home</NavLink>   </li>
        <li><NavLink to="/about" className={({ isActive }) => `px-5 py-5 ${isActive ? "bg-green-800" : "hover:bg-green-800"} cursor-pointer`}>About</NavLink></li>
        <li><NavLink to = "/popularstories" className={({ isActive }) => `px-5 py-5 ${isActive ? "bg-green-800" : "hover:bg-green-800"} cursor-pointer`}>Popular Stories</NavLink></li>
       </ol>
        
    </nav>
    
  )
}

export default Navbar