// src/components/NavbarAL.jsx
import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const NavbarAL = () => {
    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 
        bg-[#0f0c29]/60 backdrop-blur-xl border-b border-white/10
        shadow-lg flex items-center justify-between px-6 py-3"
        >
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-md">
                    <span className="text-white font-extrabold text-lg">SL</span>
                </div>
                <span className="text-white font-bold text-xl tracking-wide">
                    StudentLMS
                </span>
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
