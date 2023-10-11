import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter, Router, Route, Routes, createRoutesFromElements } from 'react-router-dom';
import PopularStories from './PopularStories.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Layout from './Layout.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';



const router = createBrowserRouter (
  // {
  //   path : "/",
  //   element : <Layout />,
  //   children : [
  //     {
  //       path: "",
  //       element : <Home />
  //     },
  //     {
  //       path : "about",
  //       element : <About />
  //     },
  //     {
  //       path : "popularStories",
  //       element : <PopularStories />
  //     },
  //     {
  //       path : "login",
  //       element : <Login />,
  //       children : [
  //         {
  //           path : "/login/signup",
  //           element : <Signup />
  //         }
  //       ]
  //     }
  //   ]
  // }
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="popularstories" element={<PopularStories />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
