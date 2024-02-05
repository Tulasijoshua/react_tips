import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/UserSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // redux state
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials={
            name, email, password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
            if(result.payload) {
                setEmail('');
                setPassword('');
                navigate('/');
            }
        })
    }

    // const handleLoginEvent = (e) => {
    //     e.preventDefault();
    //     let userCredentials={
    //                 email, password
    //             }
    //     axios.post('https://cointossapi.pythonanywhere.com/api/auth/login/', userCredentials)
    //         .then((response) => {
    //             const result = response.data;

    //         })
    //         .catch((err) => {
    //             console.error('Error:', err)
    //         })
    // }

    

  return (
    <form className='form-group custom-form' onSubmit={handleLoginEvent}>
        {/* <label>Name</label>
        <input type='text' required className='form-control'
            value={name} onChange={(e) => setName(e.target.value)}
        /> */}
        <br />
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
        <button type='submit' className='btn btn-success btn-md'>
            {loading ? 'Loading...' : 'Login'}
        </button>
        {error && (
            <div className='alert alert-danger' role='alert'>{error}</div>
        )}
    </form>
  )
}

export default Login