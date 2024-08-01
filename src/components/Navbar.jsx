import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-950 py-5 shadow-[0_4px_10px_rgba(0,0,0,0.25)]'>
        <div className="logo">
            <span className='font-bold text-purple-400 font-serif text-xl mx-9'>FocusFlow</span>
        </div>
        <ul className='flex text-gray-200 gap-10 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
