import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
  }

  return (
    <div className='h-auto'>
        <form onSubmit={(e) => {submitHandler(e)}} className='flex justify-between items-start'>
          <div className='w-1/2'>
            <h3>Task Title</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              onChange={(e) => {setTaskTitle(e.target.value)}}
              type="text"
              placeholder="Make a UI design" 
              value={taskTitle}/>
            <h3>Date</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="date"
              value={taskDate}
              onChange={(e) => {setTaskDate(e.target.value)}}/>
            <h3>Asign to</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="text"
              placeholder="Employee name"
              value={asignTo}
              onChange={(e) => {setAsignTo(e.target.value)}}/>
            <h3>Category</h3>
            <input className="block w-[90%] px-5 py-2 m-1 mb-4 bg-zinc-800 outline-none rounded-md"
              type="text"
              placeholder="Design, Dev, etc"
              value={category}
              onChange={(e) => {setCategory(e.target.value)}}/>
          </div>
          <div className='w-2/5 flex flex-col items-start'>
            <h3>Description</h3>
            <textarea className="block w-full h-53 mt-3 mb-4 px-5 py-2 resize-none bg-zinc-800 outline-none rounded-md" placeholder="Write your details"
              value={taskDescription}
              onChange={(e) => {setTaskDescription(e.target.value)}}></textarea>
            <button className=" w-full bg-indigo-500 mt-3 p-2 rounded-md hover:bg-indigo-600 hover:p-3 transition-all duration-500 ease-in-out">Submit</button>   
          </div>
        </form>
      </div>
  )
}

export default CreateTask
