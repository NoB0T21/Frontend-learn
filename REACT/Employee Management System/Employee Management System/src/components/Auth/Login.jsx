import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  return (
    <div className="w-screen text-white h-screen flex items-center justify-center bg-zinc-900 text-white">
        <div className="form p-5 text-white gap-5 flex flex-col items-center justify-center border-2 border-indigo-500 rounded-xl">
          <h1 className="text-3xl">login Users</h1>
          <form 
            onSubmit={(e) => {submitHandler(e)}}
            className='flex flex-col items-center gap-2'>
            <input
              onChange={(e) => {setEmail(e.target.value)}} 
              required 
              className="block w-80 px-5 py-3 m-1 bg-zinc-800 outline-none rounded-md" 
              type="Email"
              placeholder="Email"
              value={email}/>
            <input
              onChange={(e) => {setPassword(e.target.value)}}
              required
              className="block w-80 px-5 py-3 m-1 bg-zinc-800 outline-none rounded-md"
              type="text"
              placeholder="Password"
              value={password}/>
            <button className="bg-indigo-500 mt-3 p-2 rounded-md hover:bg-indigo-600 hover:p-3 transition-all duration-500 ease-in-out">Submit</button>   
          </form>
        </div>
    </div>
  )
}

export default Login
