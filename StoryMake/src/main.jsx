import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PopularStories from './PopularStories.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Layout from './Layout.jsx';


const router = createBrowserRouter ([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path: "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "popularStories",
        element : <PopularStories />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
