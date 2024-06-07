import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerHandle = (e) => {
        e.preventDefault();
        console.log(name, email, password)
    }
  return (
    <div className=''>
        <div className='flex flex-col items-center'>
        <h3>Register</h3>
        <label>Name</label>
        <input className='border' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input className='border' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className='border' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={registerHandle} className='mt-33'>Register</button>
        </div>
        
    </div>
  )
}

export default Register