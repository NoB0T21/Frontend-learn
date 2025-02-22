import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between gap-5 mt-5' >
      <div className='bg-red-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='bg-yellow-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='bg-green-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='bg-blue-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
