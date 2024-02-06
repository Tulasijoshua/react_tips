import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
