import React from 'react'
import { LuBellDot } from "react-icons/lu";
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='w-full  h-15   bg-gray-200 flex p-4 justify-between font-semibold'>
        <div className='flex gap-5'>
          <Link to="/">
            <div className='underline'>
              Dashboard
            </div>
          </Link>

          <Link to="/explore">
            <div className='underline'>
              Explore
            </div>
          </Link>
        </div>

        <div className='mr-5 flex gap-8'>
          <LuBellDot size={20} className='mt-1' />
          Rowena Ravenclaw
        </div>
      </div>
  )
}

export default Header
