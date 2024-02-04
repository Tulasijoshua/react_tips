import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/UserSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials={
            email, password
        }
        dispatch(loginUser(userCredentials))
    }
  return (
    <form className='form-group custom-form' onSubmit={handleLoginEvent}>
        <label>Email</label>
        <input type='email' required className='form-control'
            value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input type='password' required className='form-control'
            value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit' className='btn btn-success btn-md'>LOGIN</button>
    </form>
  )
}

export default Login