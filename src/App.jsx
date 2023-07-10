import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
