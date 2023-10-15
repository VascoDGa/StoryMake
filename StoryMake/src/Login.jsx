import {useState ,React } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {

  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();


      const credentials = JSON.stringify({
        email: `${username}`,
        password: `${password}`,
      })
      const resp = await axios.post("http://localhost:5000/api/v1/auth/login", credentials, {headers : {'Content-Type' : 'application/json'}})
        //.then((response) => console.log ( response.data))
          .catch((err) => console.log(err));
      
      if(resp.data.success) {
        navigate('/')
      }
      
    }

  return (
    <div className='flex flex-col items-center pt-[100px] space-y-2 text-[25px]'>
        <p className=' text-blue-800'>Login</p>
        <label htmlFor="E-mail" className='text-white'>E-mail</label>
        <input type="text" placeholder='Enter email' id='E-mail' className='border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black' value={username} onChange = {(e) => setUsername(e.target.value)}  />
        <label htmlFor="password" className='text-white'>Password</label>
        <input type="password" placeholder='Enter password' className='mb-[30px] border-[2px] rounded-md pl-[5px] outline outline-offset-1 outline-green-800 border-black' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <button type='submit' className='text-white rounded-md w-[120px] h-[50px] bg-green-800' onClick={handleSubmit}>Submit</button>
        <p>Don't have an account? <NavLink to = "/signup" className={({isActive}) => "text-green-800"}>Sign up</NavLink></p>
    </div>
  )
}

export default Login