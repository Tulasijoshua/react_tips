import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/reducers/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('login', email, password)
        dispatch(login({email, password})).then(action => {
            localStorage.setItem('accessToken', action.payload.token)
            navigate("/")
        })
    }
  return (
    <div className='flex flex-col items-center'>
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Sign In</button>
            </div>
        </form>
        
    </div>
  )
}

export default Login