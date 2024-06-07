import React from 'react'

const Login = () => {
    const onSubmit = () => {};
  return (
    <div>
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder='Email' />
            </div>
            <div>
                <input type="text" placeholder='Password' />
            </div>
            <div>
                <button type='submit'>Sign In</button>
            </div>
        </form>
    </div>
  )
}

export default Login