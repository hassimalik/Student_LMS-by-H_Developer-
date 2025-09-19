
import React, { useEffect, useRef } from "react";
import NavbarBL from "./../components/NavbarBL";
import { Link } from 'react-router-dom';
import { SignIn, SignUp, UserButton } from "@clerk/clerk-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Features from '../components/Features';
import Testimonials from '../components/Testimonials'
const DashboardBL = () => {

  // =====================================    GSAP       ===============================================

  const heroRef = useRef(null);
  const heroImg = useRef(null);
  const heroPara = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let gtx = gsap.context(() => {
      function page1Animation() {
        const tl1 = gsap.timeline();
        tl1.from(".heading", {
          x: -100,
          duration: 1,
          opacity: 0,
          delay: 1,
        }),
          tl1.from("li", {
            opacity: 0,
            stagger: 0.3,
            y: -50,
            duration: 0.8,
          }, "-=1.5"),
          tl1.from(heroRef.current, {
            opacity: 0,
            duration: 1,
            x: -40
          }, "-=3.5")
        tl1.from(heroPara.current, {
          opacity: 0,
          duration: 1,
          x: -40
        }, "-=3.5"),
          tl1.from(heroImg.current, {
            opacity: 0,
            x: 40,
            duration: 1
          }, "-=3.5")
        tl1.from(".btn", {
          opacity: 0,
          duration: 1
        }, "-=3")
      }
      function page2Animation() {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#features",
            start: "top 40%",
            end: "top 20%",
            scrub: 3,
            toggleActions: "play reverse play reverse",
          }
        })
        tl2.from(".f-heading", {
          y: -50,
          opacity: 0,
          duration: 0.8
        }),
          tl2.from(".f-text", {
            y: -10,
            opacity: 0,
            duration: 0.8
          }),
          gsap.utils.toArray(".f-card").forEach((card) => {
            tl2.from(card, {
              y: 50,
              opacity: 0,
              duration: 2,
              stagger: 0.2,
              ease: "power1.out"
            }
              , "cards")
          })

      }
      function page3Animation() {
        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse"
          }
        });
        tl3.from(".t-heading", {
          opacity: 0,
          y: -40,
          duration: 0.7
        })
        tl3.from(".t-para", {
          opacity: 0,
          duration: 0.7,
          y: -40
        })
        tl3.from(".t-card", {
          opacity: 0,
          y: 40,
          ease: "power1.out"
        })
      }
      page1Animation();
      page2Animation();
      page3Animation();
    })
    ScrollTrigger.refresh();
    return () => gtx.revert();
  }, [])

  // ====================================  GSAP END      =================================================




  return (
    <>
      <NavbarBL />
      <div
        className="w-full min-h-screen inset-0 
        flex flex-col justify-center relative" style={{
          background: "#000000",
          backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto pt-32 lg:pt-0 px-6 lg:px-10 gap-10">

          {/* Left Side Content */}
          <div className="lg:w-1/2 w-full sm:mt-25 md:mt-0 text-left space-y-6 flex flex-col justify-center">
            <h1 ref={heroRef}
              className="text-transparent sm:mt-45  md:mt-0 bg-clip-text bg-gradient-to-r from-[#fc9804] via-[#0885eb] to-[#720360] text-[44px] lg:text-[54px] font-kaushan font-extrabold leading-tight drop-shadow-lg">
              Master New Skills <br /> with Ease
            </h1>

            <p ref={heroPara} className="lg:w-[70%] text-gray-300 text-lg leading-relaxed backdrop-blur-sm">
              Unlock your learning potential with curated playlists, interactive
              progress tracking, and AI-driven insights. <br />
              <span className="text-[#12fadb] font-semibold">Student LMS</span>{" "}
              makes growth simple, smart, and fun.
            </p>
            <div className="flex gap-4 ">
              <Link to={"/sign-in"}>
                <button className="px-6 py-3 btn  bg-[#116ab32a] hover:bg-[#eb5216] rounded-xl outl1ine-1 font-semibold text-white hover:scale-105 transition-transform duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side 3D Globe */}
          <div className="lg:w-1/2 w-full flex justify-center items-center relative">
            <img ref={heroImg} src="/image.png" alt="" />
          </div>
        </div>
      </div>
      <Features />
      <Testimonials />
    </>
  );
};

export default DashboardBL;
