import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast' 

import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Home/Dashboard'
import InterviewPrep from './pages/InterviewPrep/components/InterviewPrep'
import UserProvider from './context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
          </Routes>
        </Router>

        <Toaster
        toastOptions={{
          className:"",
          style:{
            fontSize:"13px"
          }
        }}
        />
      </div>
    </UserProvider>
  )
}

export default App;

