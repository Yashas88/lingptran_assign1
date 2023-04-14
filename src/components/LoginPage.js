import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserPage from './UserPage';

const LoginPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/userDetails')
    }
    var users = {name: name, email: email};
    localStorage.setItem('users', JSON.stringify(users))

    return (
        <>
            <div className='container my-5'>
                <div>
                    <h1 className='py-3 text-danger text-center'>User Login Page</h1>
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
                                className="img-fluid" alt="Login Image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={handleSubmit}>

                                <div className="form-outline mb-4">
                                    <input type="text" className="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} required/>
                                    <label className="form-label" for="form1Example13">User Name</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    <label className="form-label" for="form1Example13">Email address</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    <label className="form-label" for="form1Example23">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>



                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage