import React from 'react'

const CreateTask = () => {
  return (
    <div className='h-auto'>
        <form className='flex justify-between items-start'>
          <div className='w-1/2'>
            <h3>Task Title</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="text"
              placeholder="Make a UI design" />
            <h3>Date</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="date"/>
            <h3>Asign to</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="text"
              placeholder="Employee name" />
            <h3>Category</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="text"
              placeholder="Design, Dev, etc" />
          </div>
          <div className='w-2/5 flex flex-col items-start'>
            <h3>Description</h3>
            <textarea className="block w-full h-53 mt-3 mb-4 px-5 py-2 resize-none bg-zinc-800 outline-none rounded-md" placeholder="Write your details"></textarea>
            <button className=" w-full bg-indigo-500 mt-3 p-2 rounded-md hover:bg-indigo-600 hover:p-3 transition-all duration-500 ease-in-out">Submit</button>   
          </div>
        </form>
      </div>
  )
}

export default CreateTask
