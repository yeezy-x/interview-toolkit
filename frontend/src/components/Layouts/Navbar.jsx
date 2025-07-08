import React from 'react'
import { ProfileInfoCard } from '../Cards/ProfileInfoCard'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 stciky top-0'>
        <div className='container mx-auto flex items-center justify-between gap-5'>
            <Link to="/dashboard">
                <h2 className='text-lg md:text-xl font-medium text-black leading-5'>
                    Interview Prep AI
                </h2>
            </Link>
            <ProfileInfoCard/>
        </div>
    </div>
  )
}

export default Navbar