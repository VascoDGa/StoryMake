
import {useState, React} from 'react'


const Forms = ({ handleSubmit , prompt , setPrompt, response, isFetched , error, sendStory }) => {


    return (
        <>
            <form onSubmit = {handleSubmit} className="flex flex-col space-y-5 items-center pt-[100px]">
                <label htmlFor="storyPrompt" className="text-white text-lg">Enter the prompt for the story </label>
                <input type="text" value = {prompt} onChange={(e) => setPrompt(e.target.value)} id="storyPrompt" className="border-[solid] pl-[5px] border-black border-2 w-[50%] outline outline-offset-1 outline-green-800"/>
                <button type = 'submit' className='text-white rounded-md w-[100px] h-[40px] bg-green-800'>Submit</button>
            </form>
            {isFetched && !error && 
                <section>
                    <p  className=" border-2 rounded-lg border-black align-center mt-[20px] ml-[200px] mr-[200px] p-6 outline outline-offset-1 outline-green-800 mb-[10px]">
                        {response.text}
                    </p>
                    <button className='border-2 rounded-md text-white bg-green-600 hover:text-green-800 hover:bg-white mb-[70px] h-[40px] ml-[1090px] pl-[10px] pr-[10px] hover:border-green-500' onClick={sendStory}>Add to Popular Stories</button>
                </section>  }
            {!isFetched && error && <section className="text-center text-red-500">Error: Could not fetch data</section>}
        </>
  )
}

export default Forms