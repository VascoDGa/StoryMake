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

    const sendStory = async () => {
      const credentials = {
        story: `${response}`
      }
      const pushStory = await axios.post("http://localhost:5000/api/v1/story/createstory", credentials)
        .catch((err) => console.log(err))

      console.log(pushStory.data);
    }

    return (
        <Forms handleSubmit = {(e) => handleSubmit(e)} prompt = {prompt} setPrompt = {setPrompt} response = {response} isFetched = {isFetched}  error = {error}  sendStory = {() => sendStory}/>
    )
}

export default Home