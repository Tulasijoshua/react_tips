import './App.css'
import Login from './auth/Login'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import Home from './components/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { getCurrentUser, logout } from './store/reducers/auth'

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <div>
      <Link to="/">Home</Link>
      {auth.currentUser === null && (
        <Fragment>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </Fragment>
      )}
      {auth.currentUser && <span onClick={() => dispatch(logout())}>Logout</span>}
      
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
