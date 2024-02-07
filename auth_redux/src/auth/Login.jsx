import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInUser } from '../redux/authSlice'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleLogin = () => {
        console.log(email, password)
        dispatch(signInUser({email, password}))
    }
  return (
    <div>
        <div className='flex flex-col items-center '>
        <h3 className=''>Login</h3>
        <label htmlFor=''>Email</label>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border' />
        <label htmlFor=''>Password</label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border' />
        <button onClick={handleLogin} className='mt-3'>Register</button>
        </div>
    </div>
  )
}

export default Login