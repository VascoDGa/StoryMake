import React from 'react'
import axios from 'axios';

const PopularStories = async () => {

  

  let allStories = await axios.get("http://localhost:5000/api/v1/story/getStories")
    .catch((err) => {console.log(err)})


  return (
    <>

    </>
  )
}

export default PopularStories