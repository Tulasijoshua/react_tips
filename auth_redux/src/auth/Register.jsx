import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../redux/authSlice'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const registerHandle = () => {
        console.table(name, email, password)
        dispatch(signUpUser({name, email, password}))
    }
  return (
    <div>
        <div className='flex flex-col items-center '>
        <h3 className=''>Register</h3>
        <label htmlFor=''>Name</label>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='border' />
        <label htmlFor=''>Email</label>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border' />
        <label htmlFor=''>Password</label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border' />
        <button onClick={registerHandle} className='mt-3'>Register</button>
        </div>
        
    </div>
  )
}

export default Register