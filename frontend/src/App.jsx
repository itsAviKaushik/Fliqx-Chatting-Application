import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Chatroom from './components/pages/Chatroom'
import Signup from './components/auth/Signup'
import OtpVerification from './components/auth/OtpVerification'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Chatroom />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/verify_user_email' element={<OtpVerification />} />
        <Route exact path='/chatroom/:id' element={<Chatroom />} />
        <Route exact path='/chatroom' element={<Chatroom />} />
      </Routes>
    </Router>
  )
}

export default App
