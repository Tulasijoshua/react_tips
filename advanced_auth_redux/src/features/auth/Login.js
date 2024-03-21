import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLoginMutation } from './authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate()

    const [login, { isLoading}] = userLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    },[])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ user, pwd}).unwrap()
            dispatch(setCredentials({ ...userData, user}))
            setUser('');
            setPwd('');
            navigate('/welcome')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login