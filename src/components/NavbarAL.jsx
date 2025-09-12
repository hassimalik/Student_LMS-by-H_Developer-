// src/components/NavbarAL.jsx
import React, { useEffect } from "react";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap'
const NavbarAL = () => {
    useEffect(()=>{
        const gtx = gsap.context(()=>{
            const tl1 = gsap.timeline();
            tl1.from("n-heading",{
                y:-40,
                opacity:0,
                delay:2,
                ease:"power1.out"
            }),
            tl1.from("Link",{
                stagger:0.3,
                duration:1,
                delay:2,
                opacity:1,
                y:-30,
            })
        }) 
        return ()=>gtx.revert();
    },[])
    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 
        bg-[#0f0c29]/60 backdrop-blur-xl border-b border-white/10
        shadow-lg flex items-center justify-between px-6 py-3"
        >
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center gap-2">
                <h1 className='n-heading  text-2xl heading  bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='inline -mt-2 mr-1' viewBox="0 0 24 24" fill="#00FF00"><path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path></svg>
                    Student<span className='text-[#fcb2da]  font-extrabold text-[20px] '>LMS</span>
                </h1>
            </Link>

            {/* Links */}
            <div className="hidden md:flex gap-6 items-center">
                <Link
                    to="/dashboardbl"
                    className="text-gray-200 hover:text-cyan-400 transition-colors font-medium"
                >
                    Home
                </Link>
                <Link
                    to="/courses"
                    className="text-gray-200 hover:text-cyan-400 transition-colors font-medium"
                >
                    Courses
                </Link>
                <Link
                    to="/profile"
                    className="text-gray-200 hover:text-cyan-400 transition-colors font-medium"
                >
                    Profile
                </Link>

            </div>

            {/* Right Side → User Button */}
            <div className="flex items-center gap-4">
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "w-10 h-10",
                        },
                    }}
                />
            </div>
        </nav>
    );
};

export default NavbarAL;
