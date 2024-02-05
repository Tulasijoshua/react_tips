import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function getUser() {
    let user = localStorage.getItem('user');
    if(user) {
        user = JSON.parse(user);
    } else {
        user = null
    }
    return user;
}

const Home = () => {

    const [user, setUser] = useState(getUser())

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

  return (
    <>
        {user ? (
            <>
                <h4>Hello, {user.data.first_name} {user.data.last_name}</h4>
                <h5>{user.data.email}</h5>
                <button className='btn btn-secondary btn-md' onClick={handleLogout}>LOGOUT</button>
            </>
        ):(
            <Link to="/login" className='btn btn-primary btn-md'>LOGIN</Link>
        )}
    </>
  )
}

export default Home