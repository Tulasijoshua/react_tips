import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../store/reducers/auth';

const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('register', username, email, password)
        dispatch(register({email, username, password}))
    }
  return (
    <div className='flex flex-col items-center'>
        <h3>Register</h3>
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Sign Up</button>
            </div>
        </form>
        
    </div>
  )
}

export default Register