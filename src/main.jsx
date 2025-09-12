import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';
import { ApiContextProvider } from './context/ApiContext.jsx';
import { CourseContextProvider } from './context/CourseContext.jsx';
import { UserProvider } from './context/UserContext.jsx';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <UserProvider>
        <ApiContextProvider>
          <CourseContextProvider>
            <App />
          </CourseContextProvider>
        </ApiContextProvider>
      </UserProvider>
    </ClerkProvider>
  </StrictMode>,
)
