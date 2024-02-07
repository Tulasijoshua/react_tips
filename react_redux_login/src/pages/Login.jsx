import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/UserSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // redux state
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials={
            email, password
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
    //     // let userCredentials={
    //     //     first_name: firstName, last_name: lastName, username: username, email, password, password_confirm: confirmPassword
    //     //         }
    //     let userCredentials={
    //         email, password
    //             }
    //     axios.post('https://cointossapi.pythonanywhere.com/api/auth/login/', userCredentials)
    //     // axios.post('https://cointossapi.pythonanywhere.com/api/auth/register/', userCredentials)
    //     // axios.post('http://localhost:8000/api/auth/register/', userCredentials)
    //         .then((response) => {
    //             const result = response.data;
    //             console.log(result)

    //         })
    //         .catch((err) => {
    //             console.error('Error:', err)
    //         })
    // }

    

  return (
    <form className='form-group custom-form' onSubmit={handleLoginEvent}>
        <label>First name</label>
        <input type='text'  className='form-control'
            value={firstName} onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Last name</label>
        <input type='text'  className='form-control'
            value={lastName} onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label>Username</label>
        <input type='text'  className='form-control'
            value={username} onChange={(e) => setUsername(e.target.value)}
        />
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
        <label>Confirm password</label>
        <input type='password'  className='form-control'
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
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