import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FetchRequest from './pages/FetchRequest'

function App() {

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} /> */}
          <Route path='/post' element={<FetchRequest />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
