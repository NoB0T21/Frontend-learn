import React from 'react'

const header = () => {
  return (
    <div className="main p-2 w-full text-white bg-zinc-900 ">
        <div className="w-full h-30 flex justify-between items-start">
            <div className="flex gap-3">
                <h1 className="text-2xl mb-1 font-bold ">Hello,<br/> <span className="text-3xl font-semibold ">Aryan 👋🏻</span></h1>
            </div>
            <button className="bg-red-500 text-lg font-medium m-2 p-3 rounded-md">logout</button>
        </div>
    </div>
  )
}

export default header
