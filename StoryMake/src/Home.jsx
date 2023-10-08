import React from 'react'
import Forms from './Forms'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [prompt , setPrompt] = useState("");
    const [response , setResponse]  =useState("");
    const [isFetched, setIsFetched] = useState(false);
    const [error , setError] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.
        post("http://localhost:5000/chat" , {prompt})
        .then((res) => {
          setResponse(res.data);
          setIsFetched(true);
        })
        .catch((err) => {
          setError(err);
        })
    }

    return (
        <Forms handleSubmit = {(e) => handleSubmit(e)} prompt = {prompt} setPrompt = {setPrompt} response = {response} isFetched = {isFetched}  error = {error}  />
    )
}

export default Home