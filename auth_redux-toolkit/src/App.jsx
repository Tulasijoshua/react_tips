import './App.css'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'

function App() {

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      
    </Routes>
  )
}

export default App
