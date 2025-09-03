import React from 'react'
import { Link } from 'react-router-dom'

const NavbarBL = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 
      bg-gradient-to-r from-purple-900/70 via-indigo-900/60 to-gray-700/70 
      backdrop-blur-xl backdrop-brightness-125
      px-11 py-3 flex justify-between items-center text-white shadow-lg'>
      <section className='logo'>
        <Link to="/dashboardbl">
          <h1 className='text-2xl'>
          Student<span className='text-[#3a3adf] font-bold'>LMS</span>
        </h1>
        </Link>
      
      </section>

      <ul className='flex space-x-5 text-[18px] items-center'>
        <li><a className='text-gray-200 hover:text-cyan-400 transition-colors font-medium' href="#features">Features</a></li>
        <li><Link className='text-gray-200 hover:text-cyan-400 transition-colors font-medium' to="#testimonials">Testimonials</Link></li>
        <li><Link className='text-gray-200 hover:text-cyan-400 transition-colors font-medium' to="/contact">Contact</Link></li>
        <li>
          <Link to="/sign-in">
            <button className="px-4 py-2 rounded-xl font-medium 
      bg-gradient-to-r from-cyan-500 to-blue-600 
      text-white shadow-lg shadow-cyan-500/30 
      hover:from-blue-600 hover:to-cyan-500 
      transition-all duration-300 ease-in-out
      backdrop-blur-md border border-white/10">
              Get Started
            </button>
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default NavbarBL
