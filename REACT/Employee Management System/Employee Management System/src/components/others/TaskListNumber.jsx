import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-5' >
      <div className='bg-red-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>{data.taskCounts.active}</h2>
        <h3 className='font-semibold text-xl'>active</h3>
      </div>
      <div className='bg-yellow-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>{data.taskCounts.newTask}</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='bg-green-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>{data.taskCounts.completed}</h2>
        <h3 className='font-semibold text-xl'>completed</h3>
      </div>
      <div className='bg-blue-400 px-10 py-5 rounded-xl w-[45%]'>
        <h2 className=' font-bold text-3xl'>{data.taskCounts.failed}</h2>
        <h3 className='font-semibold text-xl'>failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
