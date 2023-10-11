
import React from 'react'


const Forms = ({ handleSubmit , prompt , setPrompt, response, isFetched , error }) => {



    return (
        <>
            <form onSubmit = {handleSubmit} className="flex flex-col space-y-5 items-center pt-[100px]">
                <label htmlFor="storyPrompt" className="text-white text-lg">Enter the prompt for the story </label>
                <input type="text" value = {prompt} onChange={(e) => setPrompt(e.target.value)} id="storyPrompt" className="border-[solid] pl-[5px] border-black border-2 w-[50%] outline outline-offset-1 outline-green-800"/>
                <button type = 'submit' className='text-white rounded-md w-[100px] h-[40px] bg-green-800'>Submit</button>
            </form>
            {isFetched && !error && <section className=" border-2 rounded-lg border-black align-center mt-[20px] ml-[200px] mr-[200px] p-6 outline outline-offset-1 outline-green-800 mb-[50px]">{response.text}</section>  }
            {!isFetched && error && <section className="text-center text-red-500">Error: Could not fetch data</section>}
        </>
  )
}

export default Forms