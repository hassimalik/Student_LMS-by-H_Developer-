// App.jsx
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import DashboardBL from './pages/DashboardBL'
import DashboardAL from './pages/DashboardAl'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import NavbarBL from './components/NavbarBL'
import NavbarAL from './components/NavbarAL'
import ContactSection from './components/ContactSection';
import Profile from './pages/Profile';
import Courses from './pages/Courses';


function App() {
  return (
    <BrowserRouter>
      {/* Wrap all routes with CourseProvider */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <SignedOut>
                  <NavbarBL />
                  <DashboardBL />
                  <Footer />
                </SignedOut>
                <SignedIn>
                  <NavbarAL />
                  <DashboardAL />
                  <Footer />
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
                  <Footer />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
    </BrowserRouter>
  )
}

export default App
