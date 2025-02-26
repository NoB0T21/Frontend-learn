import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' shrink-0 flex flex-col justify-between bg-green-500 w-[400px] h-[90%] rounded-xl p-5'>
        <div>
          <div className='flex justify-between items-center '>
              <h3 className='bg-amber-700 px-3 py-2 rounded-md '>{data.category}</h3>
              <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <div>
            <h2 className=' text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-5 gap-1 font-semibold'>
          <button className='bg-gray-400 p-2 rounded-md '>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
