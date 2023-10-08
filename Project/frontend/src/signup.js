import React, { useState }  from 'react'
import './signup.css'
import Validation from './SignupValidation'

function Signup() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        username: '',
        first_name: '',
        last_name: ''
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
            <form className="form" action="" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="inputs">
                    <div className="input-box">
                        <input type="text" placeholder='Username' name='username' onChange={handleInput} />
                        {errors.username && <span className='text-danger'>{errors.username}</span>}
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='First Name' name='first_name' onChange={handleInput} />
                        {errors.first_name && <span className='text-danger'>{errors.first_name}</span>}
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Last Name' name='last_name' onChange={handleInput} />
                        {errors.last_name && <span className='text-danger'>{errors.last_name}</span>}
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' name='email' onChange={handleInput} />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' name='password' onChange={handleInput} />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn-login">Sign UP</button>
                    
                </div>


            </form>
        </div>
    )
}

export default Signup

