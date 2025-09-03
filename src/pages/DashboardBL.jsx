// src/pages/DashboardBL.jsx
import React from "react";
import NavbarBL from "./../components/NavbarBL";
import Spline from "@splinetool/react-spline";
import { Link } from 'react-router-dom';
import { SignIn, SignUp, UserButton } from "@clerk/clerk-react";
import Features from '../components/Features'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
const DashboardBL = () => {
  return (
    <>
      <NavbarBL />
      <div
        className="w-full min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
        flex flex-col justify-center relative"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center h-full px-10 gap-10">
          {/* Left Side Content */}
          <div className="lg:w-1/2 w-full text-left space-y-6 flex flex-col justify-center">
            <h1 className="text-[#19f0ff] text-[44px] lg:text-[54px] font-kaushan font-extrabold leading-tight">
              Master New Skills <br /> with Ease
            </h1>
            <p className="lg:w-[70%] text-gray-300 text-lg leading-relaxed backdrop-blur-sm">
              Unlock your learning potential with curated playlists, interactive
              progress tracking, and AI-driven insights. <br />
              <span className="text-[#12fadb] font-semibold">Student LMS</span>{" "}
              makes growth simple, smart, and fun.
            </p>
            <div className="flex gap-4">
              <Link to={"/sign-in"}>
                <button className="px-6 py-3 cursor-pointer bg-[#116ab32a] hover:bg-[#1c1ca7] rounded-xl outline-1 font-semibold text-white hover:scale-105 transition-transform duration-300">
                  Get Started
                </button>
              </Link>

            </div>
          </div>

          {/* Right Side 3D Globe */}
          <div className="lg:w-1/2 w-full flex justify-center items-center relative">
            <div className="w-full h-[400px] lg:h-[600px] flex justify-center items-center">
              <Spline className="-mt-14 " scene="https://prod.spline.design/G09aFTRHAt6jPxQz/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
      <Features/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default DashboardBL;
