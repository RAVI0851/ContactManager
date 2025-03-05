import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-around shadow-md h-[5rem] gap-[5rem] mb-[15rem]] bg-blue-400 '>
         <Link to={'/'}><h1 className='text-2xl text-neutral-950 font-black'>Contact Manager</h1></Link>
        <Link to={'/contactList'}><h1 className='text-2xl text-neutral-950 font-black'>Contact List</h1></Link>
        </div>
    </div>
  )
}

export default Header