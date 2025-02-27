import React from 'react'
import Header from '../others/header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="w-scree h-screen bg-zinc-900 p-10">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
