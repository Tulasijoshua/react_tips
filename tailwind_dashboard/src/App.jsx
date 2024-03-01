import { useEffect, useState } from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import AdminDashboard from './pages/admin-dashboard/adminDashboard';
import './App.css'

function App() {
  const navigate  = useNavigate();
  useEffect(() => {
    navigate('/admin-dashboard/marketing')
  }, [])
  return (
    <div className='h-screen w-full'>
      <Routes>
        <Route path='/admin-dashboard/:category' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
