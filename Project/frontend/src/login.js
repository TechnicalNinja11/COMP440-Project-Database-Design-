import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className="container">
            <form className="login-form" action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="inputs">
                    <div className="input-box">
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn-login">Log In</button>
                    <div className="signup-link">
                        <p>Don't have an account? <Link to="/signup" >Sign Up</Link></p>
                        
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Login


