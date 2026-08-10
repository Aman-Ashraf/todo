import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="logo">
        <span className="font-bold text-xl">MyTodo</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="list-none cursor-pointer hover:font-bold">Home</li>
        <li className="list-none cursor-pointer hover:font-bold">Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar
