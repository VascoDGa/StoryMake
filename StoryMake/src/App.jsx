import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularStories from "./PopularStories";
import ErrorPage from "./ErrorPage";

export function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} >
            <Route path="about" element={<About />} />
            <Route path = "popularstories" element = {<PopularStories/>} />
            <Route path = "*" element = {<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
   </>
  );
}

export default App
