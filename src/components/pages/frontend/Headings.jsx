import { imgPath } from '@/components/helpers/functions-general'
import { Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Headings = () => {
  return (
    <header className='bg-dark py-1'>
        <div className="container">
            <div className="flex justify-between items-center">
                <img src={`${imgPath}/logo.png`} alt="" className='max-w-[90px]'/>
                <nav>
                    <ul className='flex items-center gap-5 text-white'>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Delivery</NavLink></li>
                        <li><NavLink>Location</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </ul>
                </nav>
                <button><Search stroke='#fff'/></button>
            </div>
        </div>
    </header>
  )
}

export default Headings