// src/components/NavbarBL.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const NavbarBL = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='fixed top-0 left-0 w-full z-50 px-6 md:px-11 py-3 flex justify-between items-center text-white shadow-lg' style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
    }}>
      {/* Logo */}
      <section className='logo'>
        <Link to="/dashboardbl">
          <h1 className='text-2xl heading bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='inline -mt-2 mr-1' viewBox="0 0 24 24" fill="#00FF00"><path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path></svg>
            Student<span className='text-[#fcb2da] font-extrabold text-[20px]'>LMS</span>
          </h1>
        </Link>
      </section>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex space-x-5 text-[18px] items-center'>
        <li><Link className='text-gray-200 hover:text-cyan-400 transition-colors font-medium' to="#features">Features</Link></li>
        <li><Link className='text-gray-200 hover:text-cyan-400 transition-colors font-medium' to="#testimonials">Testimonials</Link></li>
        <li><Link className='text-gray-200 hover:text-cyan-400 transition-colors font-medium' to="/contact">Contact</Link></li>
        <li>
          <Link to="/sign-in">
            <button className="px-4 py-2 rounded-xl font-medium bg-[#ffa600dc] hover:bg-transparent transition-all duration-300 ease-in-out backdrop-blur-md border border-white/10">
              Get Started
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-white text-3xl focus:outline-none'>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className='absolute top-full right-0 w-2/3 bg-black/90 backdrop-blur-md flex flex-col p-6 space-y-4 sm:hidden z-40'>
          <Link onClick={() => setMenuOpen(false)} className='text-gray-200 hover:text-cyan-400 font-medium' to="#features">Features</Link>
          <Link onClick={() => setMenuOpen(false)} className='text-gray-200 hover:text-cyan-400 font-medium' to="#testimonials">Testimonials</Link>
          <Link onClick={() => setMenuOpen(false)} className='text-gray-200 hover:text-cyan-400 font-medium' to="/contact">Contact</Link>
          <Link onClick={() => setMenuOpen(false)} to="/sign-in">
            <button className="px-4 py-2 rounded-xl font-medium bg-[#ffa600dc] hover:bg-transparent transition-all duration-300 ease-in-out backdrop-blur-md border border-white/10 w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavbarBL
