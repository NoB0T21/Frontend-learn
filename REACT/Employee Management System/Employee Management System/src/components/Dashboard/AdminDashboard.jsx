import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className="w-scree h-screen bg-zinc-900 p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
