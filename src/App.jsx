import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Chatroom from './components/pages/Chatroom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Chatroom />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
