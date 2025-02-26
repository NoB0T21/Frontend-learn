import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)


  return (
    <div id='tasklist' className='w-full mt-2 rounded-md'>
      <div className='bg-pink-500 w-full mb-2 p-4 flex justify-between rounded-md'>
        <h2>Profile</h2>
        <h2>Employee Name</h2>
        <h2 className='text-xl'>New Task</h2>
        <h2 className='text-xl'>Active Task</h2>
        <h2 className='text-xl'>Completed</h2>
        <h2 className='text-xl'>Failed</h2>
      </div>
      <div id='tasklist' className=' h-29 overflow-y-auto '>
        {userData.map((e) => {
          return <div className=' border-indigo-500 border-2 w-full h-15 mb-2 p-5 flex justify-between items-center rounded-md'>
              <img className='h-13 w-13 rounded-md object-cover' src={e.profile}></img>
              <h2>{e.firstName}</h2>
              <h2 className='text-yellow-400 text-xl w-1'>{e.taskCounts.newTask}</h2>
              <h2 className='text-red-400 text-xl w-1'>{e.taskCounts.active}</h2>
              <h2 className='text-green-400 text-xl w-1'>{e.taskCounts.completed}</h2>
              <h2 className='text-blue-400 text-xl w-1'>{e.taskCounts.failed}</h2>
            </div>
        })}
      </div>
    </div>
  )
}

export default AllTask
