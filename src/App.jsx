// App.jsx
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import {lazy, React, Suspense } from 'react'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import NavbarBL from './components/NavbarBL'
const NavbarAL = lazy(()=>import("./components/NavbarAL"))
import Spinner from './Spinner';
const Profile = lazy(()=>import("./pages/Profile"));
const ContactSection = lazy(()=>import("./components/ContactSection"));
const SignInPage = lazy(()=>import("./pages/SignInPage"));
const SignUpPage = lazy(()=>import("./pages/SignUpPage"));
const DashboardAL = lazy(()=>import("./pages/DashboardAl"));
const Courses = lazy(()=>import ("./pages/Courses"));
const DashboardBL = lazy(()=>import("./pages/DashboardBL"))
import CustomCursor from './CustomCursor';
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <BrowserRouter>
      {/* Wrap all routes with CourseProvider */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <SignedOut>
                  <NavbarBL />
                  <DashboardBL />
                </SignedOut>
                <SignedIn>
                  <NavbarAL />
                  <DashboardAL />
                </SignedIn>
              </>
            }
          />

          {/* Clerk Auth Pages */}
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/dashboardbl" element={<DashboardBL />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <NavbarAL />
                  <DashboardAL />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
        </Suspense>
        <Footer/>
        <CustomCursor />
        <Analytics />
    </BrowserRouter>
    
  )
}

export default App
