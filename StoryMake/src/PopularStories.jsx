import React from 'react'
import axios from 'axios';

const PopularStories = () => {

  let getStories;

  axios.get("http://localhost:5000/story/getStories")
    .then((res) => {
      getStories = res.allStories;
      console.log(getStories);
    }).catch((err) => {console.log(err)})

  

  return (
    <>
      {getStories && getStories.map((stories) => {<p>{stories.story}</p>})}
    </>
  )
}

export default PopularStories