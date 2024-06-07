import './App.css'
import Login from './auth/Login'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import Home from './components/Home'

function App() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
      <span>Logout</span>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
