import React, { useEffect, useState } from 'react'

const Header = ({data}) => {
  const logOut = () => {
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  const [name , setName] = useState('Aryan')
  const [profile , setProfile] = useState('https://images8.alphacoders.com/669/669047.png')
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser')
      if(user != '{"role":"admin"}'){
        setName(`${data.firstName}`)
        setProfile(`${data.profile}`)
      }
  }, [])

  return (
    <div className="main p-1 w-full text-white bg-zinc-900 ">
        <div className="w-full h-30 flex justify-between items-start">
            <div className="flex gap-3">
            <img className='h-22 w-22 rounded-full object-cover' src={profile}></img>
                <h1 className="text-2xl mb-1 font-bold ">Hello,<br/> <span className="text-3xl font-semibold ">{name} 👋🏻</span></h1>
            </div>
            <button onClick={logOut} className="bg-red-500 text-lg font-medium m-2 p-3 rounded-md">logout</button>
        </div>
    </div>
  )
}

export default Header
