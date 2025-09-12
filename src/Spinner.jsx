// src/components/Spinner.jsx
import React from "react";

function Spinner() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative">
                {/* Outer Ring */}
                <div className="w-24 h-24 border-8 border-gray-800 border-t-blue-500 rounded-full animate-spin"></div>

                {/* Middle Ring */}
                <div className="absolute top-2 left-2 w-20 h-20 border-8 border-gray-900 border-b-purple-600 rounded-full animate-spin-slow"></div>

                {/* Inner Glow Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse shadow-lg shadow-blue-700/50"></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;
